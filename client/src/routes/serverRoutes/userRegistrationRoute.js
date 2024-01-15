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

        const { success, token } = response.data;

        if (success && token) {
            console.log(token)
            handleNavigation('home')
        } else {
            setErrorLogin(true);
        }
    } catch (error) {
        console.error('Error during login:', error);
        setErrorLogin(true);
    }
};

export const verifyToken = async (setIsAuthenticated) => {
    try {
        const response = await axios.get(`${API_ROUTE}/verify-token`);

        const { success } = response.data;

        if (success) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    } catch (error) {
        console.error('Error during verifying token:', error);
        setIsAuthenticated(false);
    }
}