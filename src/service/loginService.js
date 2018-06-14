export default {
  login(store, _username, _password) {
    let result = null;
    if (_username === 'admin' && _password === 'password') {
      result = {
        username: _username,
      };
      store.commit('login', 'new token', _username, _password);
      console.log(store.state.session);
    }
    return result;
  },
};
