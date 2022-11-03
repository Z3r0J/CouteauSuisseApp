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

  return await fetch(`https://api.agify.io/?name=${name}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Request failed', err));
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
  return await fetch(
    `http://api.openweathermap.org/weather?q=Santo+Domingo&appid=e83b3c4c08285bf87b99f9bbc0abe3f0&units=metric`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
      },
    },
  )
    .then(response => response.json())
    .catch(err => console.log('Request failed', err));
};
