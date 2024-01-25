import axios from "axios"
import { API_ROUTE } from "../API/config"


export const addFriends = async (newFriend) => {
    try {
        const response = await axios.post(`${API_ROUTE}/friends/addNewFriend`, {
            newFriend: newFriend,   
        });

        if (response.data && response.data.success) {
            console.log("Amigo agregado con éxito", response.data);
        } else {
            console.log("Error al agregar amigo:", response.data.message);
        }
    } catch (error) {
        console.log("Error en la ruta addFriend", error);
    }
}