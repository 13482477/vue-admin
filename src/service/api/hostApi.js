import axios from 'axios';

export default {
  endpoints() {
    return axios.get('http://192.168.68.254:8320/endpoints', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};
