import SERVER from "../Apis/GlobalConfig";
import _Class from "./_Class";

class Teacher {

    constructor() {

    }

    create = async(postData) =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        };

        const response = await fetch(SERVER+"Teacher/create/", requestOptions);
        const data = await response.json();
        return data
    }

    async getAll() {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+"Teacher/getAll/0/99999", requestOptions);
        const data = await response.json();
        return data
    }

    async getOne(id) {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+"Teacher/getOne/"+id, requestOptions);
        const data = await response.json();
        return data
    }

    pay = async(postData) =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        };

        const response = await fetch(SERVER+"teacher/pay/", requestOptions);
        const data = await response.json();
        if(data.finalResult == true){
            return true
        }else{
            return false
        }
    }

    validateCustomer = async(id) =>{
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+"Teacher/validate/"+id, requestOptions);
        const data = await response.json();
        if(data.finalResult == true){
            alert("done")
        }else{
            alert("wrong")
        }
    }

    getClasses = (teacherId)=>{
        let teacher = this.getOne(teacherId)

    }

    getAllPaymentsById= async (teacherId) => {
        try {
            let detailedTeacher = await _Class.getOne(teacherId)
            let classRelatedPayments = detailedTeacher["result"]['Payment'];
            let teacherPaymentsIn = 0, teacherPaymentsOut = 0
            classRelatedPayments.forEach(entry => {
                let paymentMeta = entry['PaymentMeta']
                let relevantPayment = false;
                for (const meta of paymentMeta) {
                    if (meta["dataTitle"] === "teacherId") {
                        relevantPayment = true
                        break
                    }
                }
                if (relevantPayment) {
                    switch (entry['type']){
                        case 0: teacherPaymentsIn  = teacherPaymentsIn + parseInt(entry["amount"])
                            break
                        case 1: teacherPaymentsOut  = teacherPaymentsOut + parseInt(entry["amount"])
                    }
                }
            })
            return {In : teacherPaymentsIn, out: teacherPaymentsOut}
        } catch (e) {

            return -1
        }
    }
    getTotalPayments = async (teacher) => {

            let teacherPayments = teacher['Payment'];
            let teacherPaymentsIn = 0, teacherPaymentsOut = 0
            teacherPayments.forEach(entry => {
                let paymentMeta = entry['PaymentMeta']
                let relevantPayment = false;
                switch (entry['type']){
                    case 0: teacherPaymentsIn  = teacherPaymentsIn + parseInt(entry["amount"])
                        break
                    case 1: teacherPaymentsOut  = teacherPaymentsOut + parseInt(entry["amount"])
                }

            })
            return {In : teacherPaymentsIn, out: teacherPaymentsOut}

    }

}

const _Teacher = new Teacher();
export default _Teacher;
