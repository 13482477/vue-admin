import Session from './entity/Session';
import CurrentUser from './entity/CurrentUser';

const SESSION = '__session';

export default {
  state: {
    session: null,
  },
  getters: {
    currentSession: (state) => {
      if (state.session != null) {
        return state.session;
      }
      return window.localStorage[SESSION];
    },
  },
  mutations: {
    login(state, token, username, password) {
      state.session = new Session(token, new CurrentUser(username, password));
      window.localStorage.setItem(SESSION, JSON.stringify(state.session));
    },
  },
};
