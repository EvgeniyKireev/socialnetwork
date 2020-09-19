import { userApi } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login , isAuth},
});
export const authMe = () => (dispatch) => {
  return userApi.getUserData().then((data) => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, login, email, true));
    }
  });
};
export const login = (email, password, rememberMe) => (dispatch) => {
  return userApi.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(authMe());
    }
  })
}

export const logout = () => (dispatch) => {
  debugger
  return userApi.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  })
}

export let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }

    default:
      return state;
  }
};
