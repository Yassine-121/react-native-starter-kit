import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosClient = axios.create({
    baseURL: 'http://192.168.11.109:8000/api'
});

axiosClient.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem('user_token')
    config.headers['Authorization'] = token ? 'Bearer '+token : 'Bearer ';
    config.headers['Content-Type'] = 'application/json';
    return config
})

export default axiosClient;