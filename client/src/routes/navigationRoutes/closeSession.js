import axios from "axios";

import { API_ROUTE } from "../API/config";

axios.defaults.withCredentials = true;

const closeSession = async (setIsAuthenticated) => {
    try {
      const response = await axios.get(`${API_ROUTE}/logout`);
      const success = response.data.success;

      if(success) {
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.log('Error closing session:', error);
      return false;
    }
  };
  
export default closeSession;