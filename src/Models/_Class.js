import SERVER from "../Apis/GlobalConfig";

let actor = "Class/"
class Class {

    constructor() {

    }

    create = async(postData) =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        };

        const response = await fetch(SERVER+actor+"create/", requestOptions);
        const data = await response.json();
        if(data.finalResult == true){
            return true
        }else{
            return false

        }
    }

    async getAll(offset, limit) {

        try{
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            };
            const response = await fetch(SERVER+actor+"getAll/"+offset+"/"+limit, requestOptions);
            const data = await response.json();
            return data
        }catch (error){
            return null
        }

    }

    async searchBy(attr, value) {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+actor+"getAll/"+attr+"/"+value, requestOptions);
        const data = await response.json();
        if (data.finalResult == true) {
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
        const response = await fetch(SERVER+"Class/getOne/"+id, requestOptions);
        const data = await response.json();
        return data
    }

    addMetaData = async(postData) =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        };
        const response = await fetch(SERVER+"/Class/addMetaData/", requestOptions);
        const data = await response.json();
        if(data.finalResult == true){
            return true
        }else{
            return false
        }
    }

    countStudents = (ClassData)=>{
        let total = 0;
        for(let i=0; i<ClassData.length; i++){
            if(ClassData[i].dataTtype = "affectedTo"){
                total++
            }
        }
        return total
    }

    studentAffected = (ClassData)=>{
        let result = []
        for(let i=0; i<ClassData.length; i++){
            if(ClassData[i].dataType == "affectedTo"){
                result.push(ClassData[i])
            }
        }
        return result
    }

    getStudentsPayment= async (_class) => {
        try {
            let detailedClass = await _Class.getOne(_class.id)
            let classRelatedPayments = detailedClass["result"]['Payment'];
            let studentPayments = 0, teacherPayments = 0
            classRelatedPayments.forEach(entry => {

                let paymentMeta = entry['PaymentMeta']
                let relevantPayment = false;
                for (const meta of paymentMeta) {
                    if (meta["dataTitle"] === "studentId") {
                        relevantPayment = true
                        break
                    }
                }
                if (relevantPayment) {
                    studentPayments = studentPayments + parseInt(entry["amount"])
                }
            })
            return studentPayments
        } catch (e) {

            return 0
        }
    }

    getTeacherPayments= async (_class) => {
        try {
            let detailedClass = await _Class.getOne(_class.id)
            let classRelatedPayments = detailedClass["result"]['Payment'];
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

    getTeacherBalance= async (_class) => {
            let  getClassOp = await _Class.getOne(_class.id)
            if(getClassOp['finalResult']){
                let _class = getClassOp['result']
                if(_class['ClassContract']['id'] == 1 ||_class['ClassContract']['id'] == 6){
                    let totalSessions = _class['ClassSessions'].length
                    let classTeacherPrice = _class['ClassContract']['price']
                    let weekSessions = _class['ClassSession'].length
                    let sessionPrice = classTeacherPrice / (weekSessions*4)
                    return  sessionPrice * totalSessions
                }else {
                    let classIncome = await this.getStudentsPayment(_class)
                    let result = (classIncome * _class['ClassContract']['rate']) / 100
                    return result
                }
            }
            else {
                return false
            }
    }

}

const _Class = new Class();
export default _Class;
