import Session from './entity/Session';
import CurrentUser from './entity/CurrentUser';

const SESSION = '__session';
const MENU_KEY = '__menu';

export default {
  state: {
    session: null,
    menu: null,
  },
  getters: {
    currentSession: (state) => {
      if (state.session != null) {
        return state.session;
      }
      return window.localStorage[SESSION];
    },
    getMenuData: (state) => {
      if (state.menu == null && window.localStorage[MENU_KEY] != null) {
        state.menu = window.localStorage[MENU_KEY];
      }
      return state.menu;
    },
  },
  mutations: {
    login(state, token, username, password) {
      state.session = new Session(token, new CurrentUser(username, password));
      window.localStorage.setItem(SESSION, JSON.stringify(state.session));
    },
    refreshMenu(state, menuData) {
      state.menu = menuData;
      window.localStorage.setItem(MENU_KEY, JSON.stringify(state.menu));
    },
  },
};
