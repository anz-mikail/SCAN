import axios from 'axios';


export const API_URL = 'https://gateway.scan-interfax.ru/api/v1/';

const $api = axios.create({
    // withCredentials: true,
    baseURL: API_URL,
    headers: { "Content-Type": "application/json", "Accept": "application/json",
    //     "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})


export default $api;