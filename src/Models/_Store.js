import SERVER from "../Apis/GlobalConfig";

class _Store{

    constructor() {
    }

    async getAll() {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER + "/store/getAll", requestOptions);
        const data = await response.json();
        if (data.finalResult == true) {
            return data.result
        } else {
            return  null
        }
    }

    changeStat = async(id, stat) =>{
        alert(id)
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+"/store/changeStat/"+id+"/"+stat, requestOptions);
        const data = await response.json();
        return data.finalResult;
    }
}

export default _Store;