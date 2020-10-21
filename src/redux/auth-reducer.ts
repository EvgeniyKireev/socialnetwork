import { userApi } from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA = 'SET_CAPTCHA';
let initialState = {
  id: null as null | number,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captcha: null as string | null,
};

export type initialStateType = typeof initialState;

export const setAuthUserData = (id: number|null, email: string|null, login : string|null, isAuth: boolean) => ({
  type: SET_USER_DATA,
  data: { id, email, login , isAuth},
});

export const authMe = () => async (dispatch:any) => {
  let data = await userApi.getUserData()
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
};
export const login = (email:string, password:string, rememberMe:boolean, captcha:string) => async (dispatch:any) => {
  let data = await userApi.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
      dispatch(authMe());
    }
    else {
      if (data.resultCode === 10) {
        dispatch(getCaptcha());
      }
      dispatch(stopSubmit("login", {_error: data.messages[0]}))
    }
}

export const logout = () => (dispatch:any) => {
  return userApi.logout().then((data:any) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }

  })
}

const setCaptcha = (url:string) => ({type: SET_CAPTCHA, url});
export const getCaptcha = () => async (dispatch:any) => {
  let response = await userApi.getCaptcha();
  dispatch(setCaptcha(response.url));
}

export let authReducer = (state = initialState, action:any) :initialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case SET_CAPTCHA:
      return {
        ...state, captcha: action.url
      }

    default:
      return state;
  }
};
