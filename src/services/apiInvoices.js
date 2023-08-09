import axios from 'axios';

const API_KEY = 'da3d3bac000b052ed8d6fb47002b74e7';
axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const getInvoiceAPI = async number => {
  const { data } = await axios.post(`/`, {
    apiKey: API_KEY,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: number,
        },
      ],
    },
  });

  return data;
};

export const getCitiesAPI = async city => {
  const { data } = await axios.post(`/`, {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getCities',
    methodProperties: {
      Ref: '',
      Page: '1',
      FindByString: city,
      Limit: '20',
    },
  });

  return data;
};

export const getDepartmentsAPI = async (city, page = 1) => {
  const { data } = await axios.post(`/`, {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityRef: city,
      Page: page,
      Limit: '20',
      Language: 'UA',
    },
  });

  return data;
};
