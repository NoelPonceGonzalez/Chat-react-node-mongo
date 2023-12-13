//import axios
import axios from "axios";
//import API-ROUTE
import { API_ROUTE } from "../API/config";

export const handleRegister = async (name, password, email, setErrorRegister, handleNavigation) => {
    try {
        const response = await axios.post(`${API_ROUTE}/register`, {
            name: name,
            password: password,
            email: email
        });
        const succes = response.data;

        if(succes) {
            console.log(response.data)
            handleNavigation('login')
        }
    }catch(error) {
        console.log(error);
        setErrorRegister(true);
    }
};

export const handleLogin = async (name, password, setErrorLogin, handleNavigation) => {
    try {
        const response = await axios.post(`${API_ROUTE}/login`, {
            name: name,
            password: password,
        });
        
        console.log(response.data);
        handleNavigation('home');
    }catch(error) {
        console.log(error)
        setErrorLogin(true)
    }
};