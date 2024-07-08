import axios from "axios";

const useFetchProducts = async () => {
    try {
        const response = await axios.get("https://kohi-backend.vercel.app/api/products");
        const data = await response.data;
        return data
    } catch (error) {
    console.log(error);    
    }
}

export default useFetchProducts;