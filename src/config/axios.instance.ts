import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1'
})

axiosInstance.interceptors.request.use(function(config) {
    const accessToken = localStorage.getItem('accessToken');
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
}, function(error) {
    return Promise.reject(error)
})


export default axiosInstance