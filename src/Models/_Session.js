import SERVER from "../Apis/GlobalConfig";
import server from "../config/globalConfig";

let actor = "Session/"
class Session {

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
            return data.result
        }else{
            return false

        }
    }

    addMetaData = async(postData) =>{

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        };

        const response = await fetch(SERVER+actor+"addMetaData/", requestOptions);
        const data = await response.json();
        if(data.finalResult == true){
            return true

        }else{
            return false
        }
    }

    async getAll() {
        try{
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            };
            const response = await fetch(SERVER+actor+"getAll/0/99999", requestOptions);
            const data = await response.json();
            return  data
        }catch (error){
            return null
        }

    }

    async getOne(id) {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(SERVER+actor+"/getOne/"+id, requestOptions);
        const data = await response.json();
        if (data.finalResult == true) {

            return data.result;
        } else {
            return null;
        }
    }

    getDateSessions(allSessions, targetDate){
        return allSessions.filter(session =>{
            let sessionDate = new Date(session['createdAt']).toLocaleString().substr(0, 10)
            if(sessionDate === targetDate){
                return session
            }
        })

    }

}

const _Session = new Session();
export default _Session;
