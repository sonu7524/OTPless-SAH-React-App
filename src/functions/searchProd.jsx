import axios from "axios";

export const searchProd = async (searchInput,page, perPage) => {
    try {
        const response = await axios.get(`https://sah-server.onrender.com/api/transactions?page=${page}&perPage=${perPage}&search=${searchInput}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}