import { userApi } from "../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewTextPostActionCreator = (text) => ({
  type: UPDATE_NEW_TEXT_POST,
  text: text,
});
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const getProfileInfo = (userId) => (dispatch) => {
  return userApi.getMypage(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};
export const setUserStatus = (status) => ({ type: SET_STATUS, status: status });
export const getStatus = (userId) => (dispatch) => {
  return userApi.getUserStatus(userId).then((data) => {
    dispatch(setUserStatus(data));
  });
};
export const updateUStatus = (status) => ({type: UPDATE_STATUS, status})

export const updateStatus = (status) => (dispatch) => {
  return userApi.updateUserStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(updateUStatus(status));
    }
  })
}

let initialState = {
  posts: [
    { id: 1, post: "Привет, отличный сайт" },
    { id: 2, post: "Круто, добавь меня в друзья!" },
  ],
  newTextPost: "",
  profile: null,
  status: "",
};

export let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: 3, post: state.newTextPost }],
      };
    }
    case UPDATE_NEW_TEXT_POST: {
      return { ...state, newTextPost: action.text };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case UPDATE_STATUS: {
      return {...state, status: action.status}
    }
    default:
      return state;
  }
};
