import axios from 'axios';

export const axiosHelper = (url: any, API_KEY: any) =>
  axios.create({
    baseURL: url,
    params: {
      app_id: API_KEY !== '' ? API_KEY : '',
    },
  });
