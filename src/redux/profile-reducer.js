import { userApi } from "../api/api";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";

export let addPost = (newTextPost) => ({ type: ADD_POST, newTextPost});
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const getProfileInfo = (userId) => async (dispatch) => {
  let response = await userApi.getMypage(userId);
  dispatch(setUserProfile(response))
};
export const setUserStatus = (status) => ({ type: SET_STATUS, status: status });
export const getStatus = (userId) => async (dispatch) => {
  let response = await userApi.getUserStatus(userId)
    dispatch(setUserStatus(response))
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
        posts: [...state.posts, { id: 3, post: action.newTextPost }],
      };
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
