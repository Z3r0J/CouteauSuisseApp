import {axiosHelper} from '../helpers/axios';

export const getGenderByName = async (name: string) => {
  if (name.includes(' ')) {
    const divideName = name.split(' ');
    name = divideName.join('+');
  }
  return await axiosHelper(`https://api.genderize.io`, '')
    .get(`/?name=${name}`)
    .then(response => response.data);
};

export const getAgeByName = async (name: string) => {
  if (name.includes(' ')) {
    const divideName = name.split(' ');
    name = divideName.join('+');
  }

  return await axiosHelper(`https://api.agify.io`, '')
    .get(`/?name=${name}`)
    .then(response => response.data);
};

export const getUniversityByCountry = async (countryName: string) => {
  if (countryName.includes(' ')) {
    const divideName = countryName.split(' ');
    countryName = divideName.join('+');
  }

  const url = `http://universities.hipolabs.com`;
  return await axiosHelper(url, '')
    .get(`/search?country=${countryName}`)
    .then(response => response.data);
};

export const getWeather = async () => {
  return await axiosHelper(
    'https://api.openweathermap.org/data/2.5',
    'e83b3c4c08285bf87b99f9bbc0abe3f0',
  )
    .get('/weather?q=Santo+Domingo', {params: {units: 'metric'}})
    .then(response => response.data);
};
