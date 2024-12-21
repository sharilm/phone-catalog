import axios from 'axios';
import { Phone } from '@/types/phone';

const API_BASE_URL = 'http://api.restful-api.dev';

export const getPhones = async (): Promise<Phone[]> => {
    const { data } = await axios.get(`${API_BASE_URL}/objects`);    
    return data;
};