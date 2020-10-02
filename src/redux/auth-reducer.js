import { userApi } from "../api/api";
import {stopSubmit} from "redux-form";

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
export const authMe = () => async (dispatch) => {
  let data = await userApi.getUserData()
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await userApi.login(email, password, rememberMe)
    if (data.resultCode === 0) {
      dispatch(authMe());
    }
    else {
      dispatch(stopSubmit("login", {_error: data.messages[0]}))
    }
}

export const logout = () => (dispatch) => {
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
