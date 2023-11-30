import axios from "axios";

export const getAllProd = async () => {
    try {
        const response = await axios.get(`https://sah-server.onrender.com/api/transactions`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}