import axios from 'axios';

export default {
  execute($scriptType, $script, $isAsync) {
    return axios.post('http://192.168.68.254:8320/scriptService/executeShell/192.168.68.254',
      {
        scriptType: $scriptType,
        script: $script,
        isAsync: $isAsync,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
  },
};
