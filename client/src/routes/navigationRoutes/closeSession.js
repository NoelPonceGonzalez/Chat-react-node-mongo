import axios from "axios";

import { API_ROUTE } from "../API/config";

const closeSession = async () => {
    try {
        const response = await axios.post(`${API_ROUTE}/logout`);

        const succes = response.data;
    
        if(succes) {
            console.log(response.data)
        }
    }catch(error){
        console.log('adsas', error)
    }

};
  
export default closeSession;