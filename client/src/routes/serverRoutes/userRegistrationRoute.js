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

export const handleLogin = async (name, password, setErrorLogin, setIsAuthenticated) => {
    try {
        const response = await axios.post(`${API_ROUTE}/login`, {
            name: name,
            password: password,
        },
            {
                withCredentials: true,
            }
        );

        const { success, token } = response.data;

        if (success && token) {
            console.log(response.data);
            setIsAuthenticated(true);
            console.log(document.cookie)
        } else {
            setErrorLogin(true);
        }
    } catch (error) {
        console.error('Error during login:', error);
        setErrorLogin(true);
    }
};

