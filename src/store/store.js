import Session from './entity/Session';
import CurrentUser from './entity/CurrentUser';

export default {
  state: {
    session: null,
  },
  mutations: {
    login(state, token, username, password) {
      console.log(token);
      state.session = new Session(token, new CurrentUser(username, password));
    },
  },
};
