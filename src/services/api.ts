import axios from 'axios';
import { baseURL, appid } from '../config';

export const api = axios.create({ baseURL });

export const searchCityWeather = async (city: any) => {
  try {
    const response = await api.get('/weather', {
      params: {
        appid,
        q: city,
        units: 'metric',
        lang: 'pt_br'
      }
    });

    return response;
  } catch (err) {
    console.error('error => ', err);
  }
}

export const searchForecastInfo = async (city: any) => {
  try {
    const response = await api.get('/forecast', {
      params: {
        appid,
        q: city,
        units: 'metric',
        lang: 'pt_br'
      }
    });

    return response;
  } catch (err) {
    console.error('error => ', err);
  }
}