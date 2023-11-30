import axios from "axios";

export const getProdByMonth = async (month) => {
    try {
        const response = await axios.get(`https://sah-server.onrender.com/api/statistics/transactions?month=${month}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}