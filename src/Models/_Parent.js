import SERVER from "../Apis/GlobalConfig";
import _Class from "./_Class";

const _Parent = {
    create : async(postData) =>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        };

        const response = await fetch(SERVER+"Parent/create/", requestOptions);
        const data = await response.json();
        return data
    }
}
export default _Parent;
