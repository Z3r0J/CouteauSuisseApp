import {axiosHelper} from '../helpers/axios';

export const getGenderByName = async (name: string) => {
  if (name.includes(' ')) {
    const divideName = name.split(' ');
    name = divideName.join('+');
  }

  return await axiosHelper('https://api.genderize.io', '')
    .get('/', {
      params: {
        name: name,
      },
    })
    .then(response => response.data);
};

export const getAgeByName = async (name: string) => {
  if (name.includes(' ')) {
    const divideName = name.split(' ');
    name = divideName.join('+');
  }

  return await axiosHelper('https://api.agify.io', '')
    .get('/', {
      params: {
        name: name,
      },
    })
    .then(response => response.data);
};

export const getUniversityByCountry = async (countryName: string) => {
  if (countryName.includes(' ')) {
    const divideName = countryName.split(' ');
    countryName = divideName.join('+');
  }

  return await axiosHelper('http://universities.hipolabs.com', '')
    .get('/search', {
      params: {
        country: countryName,
      },
    })
    .then(response => response.data);
};
