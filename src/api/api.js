import axios from "axios";

export const api = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5"
})
export const api_key = '457ca60e37b678f25cd6e149802ced90';