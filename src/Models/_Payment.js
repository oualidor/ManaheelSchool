import SERVER from "../Apis/GlobalConfig";

class Payment {

    constructor() {

    }

    create = async(postData) =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        };

        const response = await fetch(SERVER+"Payment/create/", requestOptions);
        alert(SERVER+"Payment/create/")
        const data = await response.json();
        if(data.finalResult == true){
            return true
        }else{
            return false
        }
    }

    async getAll(offset, limit) {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+"Payment/getAll/"+offset+"/"+limit, requestOptions);
        const data = await response.json();
        return data
    }

    async getAllFiltered(offset, limit, filter) {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+"Payment/getAll/"+offset+"/"+limit+"/"+filter, requestOptions);
        const data = await response.json();
        return data
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

    delete  = async (id)=>{
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+"Payment/delete/"+id, requestOptions);
        const data = await response.json();
        return data
    }

    getDatePayments(paymentList, date) {

        let todayPayments = []
        paymentList.forEach(payment => {
            let paymentDate = new Date(payment['createdAt']).toLocaleString().substr(0, 10)

            if (paymentDate === date) {

                todayPayments.push(payment)
            }
        })
        return todayPayments
    }


}

const _Payment = new Payment();
export default _Payment;
