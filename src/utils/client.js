import axios from 'axios';

const API_HOST = 'https://jsonplaceholder.typicode.com';

export default ({ method, url, data }) => {
  return axios({
    baseURL: API_HOST,
    method,
    url,
    data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
}
