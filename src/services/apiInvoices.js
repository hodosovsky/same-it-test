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
          Phone: '380600000000',
        },
      ],
    },
  });

  return data;
};
