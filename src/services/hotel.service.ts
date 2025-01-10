import axiosInstance from "../config/axios.instance"



export const getHotels = async () => {

    const response = await axiosInstance.get('/hotels');
    return response.data
    
}