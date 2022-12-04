import axios from "axios";
import {getData} from "../utils/localStorage";

const axiosClient = axios.create({
    baseURL: 'http://192.168.11.109:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ getData('@user_token')
    }
});

export default axiosClient;