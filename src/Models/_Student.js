import SERVER from "../Apis/GlobalConfig";
import _Class from "./_Class";

class Student {

    constructor() {

    }



    create = async(postData) =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        };

        try{
            const response = await fetch(SERVER+"Student/create/", requestOptions);
            const data = await response.json();
            return data
        }
        catch (e) {
            return {finalResult: false, error: {errors: [{path: 'global', message: 'Check you internet or try again later'}]}}
        }


    }

    async getAll() {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+"Student/getAll/0/99999", requestOptions);
        const data = await response.json();
        if (data.finalResult === true) {
            return data.result;
        } else {
            return null;
        }
    }


    async getOne(id) {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+"Student/getOne/"+id, requestOptions);
        const data = await response.json();
        return data
    }

    validateCustomer = async(id) =>{
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+"Student/validate/"+id, requestOptions);
        const data = await response.json();
        if(data.finalResult == true){
            alert("done")
        }else{
            alert("wrong")
        }
    }

    pay = async(postData) =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        };

        const response = await fetch(SERVER+"Student/pay/", requestOptions);
        const data = await response.json();
        if(data.finalResult == true){
           return true
        }else{
            return false
        }
    }

    getTotalPaymentById = async (studentId) => {
        let getStudent = await this.getOne(studentId)
        let student = getStudent['result']
        let studentPayments = student['Payment'];
        let teacherPaymentsIn = 0
        studentPayments.forEach(entry => {
            teacherPaymentsIn  = teacherPaymentsIn + parseInt(entry["amount"])
        })
        return teacherPaymentsIn
    }
    getTotalPayments = async (student) => {
        let studentPayments = student['Payment'];
        let teacherPaymentsIn = 0
        studentPayments.forEach(entry => {
            teacherPaymentsIn  = teacherPaymentsIn + parseInt(entry["amount"])
        })
        return teacherPaymentsIn
    }
    getTotalPaymentsForClass = async (student, classId) => {
        try{
            let _class = await _Class.getOne(classId)
            if(_class['result']['managed']){
                let studentPayments = student['Payment'];
                let studentSessions = student['Sessions'];
                let teacherPaymentsIn = 0
                studentPayments.forEach(entry => {
                    let relevant = false
                    for (const paymentMeta of entry['PaymentMeta']) {
                        if(paymentMeta['dataTitle'] === "classId" && parseInt(paymentMeta['dataValue']) === classId){
                            relevant = true
                            break
                        }
                    }
                    if (relevant) teacherPaymentsIn  = teacherPaymentsIn + parseInt(entry["amount"])
                })
                return teacherPaymentsIn
            }else {
                return "Un managed"
            }
        }catch (e){
            return 0
        }

    }
    getClassSessions= async (student, classId) => {
        try{
            let _class = await _Class.getOne(classId)
            if(_class['result']['managed']){
                let studentPayments = student['Payment'];
                let studentSessions = student['Sessions'];
                //TODO verify presence policy
                if(false){
                    let teacherPaymentsIn = 0
                    studentPayments.forEach(entry => {
                        let relevant = false
                        for (const paymentMeta of entry['PaymentMeta']) {
                            if(paymentMeta['dataTitle'] ===  "classId" && paymentMeta['dataValue'] === classId){
                                relevant = true
                                break
                            }
                        }
                        if (relevant) teacherPaymentsIn  = teacherPaymentsIn + parseInt(entry["amount"])
                    })
                    return teacherPaymentsIn
                }else {
                    let result = 0;
                    studentSessions.forEach(session =>{
                        if(session.classId === classId) result = result + 1
                    })
                    return result
                }

            }else {
                return "Un managed"
            }
        }catch (e){
            return "Un managed"
        }

    }



}

const _Student = new Student();
export default _Student;
