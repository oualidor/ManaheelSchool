import SERVER from "../Apis/GlobalConfig";

class _Model {

    constructor(ACTOR) {
        this.ENTRIE_POINT = SERVER+ACTOR
    }

    create = async(postData) =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        };

        const response = await fetch(this.ENTRIE_POINT+"/create/", requestOptions);
        const data = await response.json();
        return data
    }
    async searchBy(attr, value) {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(this.ENTRIE_POINT+"/searchBy/"+attr+"/"+value, requestOptions);
        const data = await response.json();
        return data
    }
    async getAll(offset, limit) {
        try{
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            };
            let URL = this.ENTRIE_POINT+"/getAll/"+offset+"/"+limit
            const response = await fetch(URL, requestOptions);
            const data = await response.json();
            return data
        }catch (error){
            return []
        }

    }

    async getOne(id) {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(this.ENTRIE_POINT+"getOne/"+id, requestOptions);
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

}

export default _Model;