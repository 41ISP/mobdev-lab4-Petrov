import axios from "axios";
import { CityWeather } from "../../entities/CityWeather";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create(
    {
        baseURL: API_BASE_URL,
        params: {
            access_key: API_KEY
        }
    }
)


export const weatherRequest = {
    get: async (location: string) =>{
        const response = await apiClient.get<CityWeather>("forecast", {
            params:{
                query: location
            }
        })
        
        return response.data;
    } 
};


