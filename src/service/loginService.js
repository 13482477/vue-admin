// import axios from 'axios';

class LoginService {
  login(_username, _password) {
    let result = null;

    // axios.post('http://localhost:8080/login', {
    //   username: _username,
    //   password: _password,
    // }).then((response) => {
    //   if (response.code === 0) {
    //     result = response.data;
    //   }
    // }).catch((error) => {
    //   console.log(error);
    // });

    if (_username === 'admin' && _password === 'password') {
      result = {
        username: _username,
      };
    }
    return result;
  }
}

export default new LoginService();
