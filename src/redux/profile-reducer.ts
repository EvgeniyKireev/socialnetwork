import {userApi} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";

type AddPostType = {
    type: typeof ADD_POST,
    newTextPost: string
}
export let addPost = (newTextPost: string): AddPostType => ({type: ADD_POST, newTextPost});
type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export let setUserProfile = (profile: ProfileType):SetUserProfileType => ({type: SET_USER_PROFILE, profile});
type SetPhotoSuccessType = {
  type: typeof SET_PHOTO_SUCCESS
  photo: File
}
let setPhotoSuccess = (photo: File):SetPhotoSuccessType => ({type: SET_PHOTO_SUCCESS, photo});
export const getProfileInfo = (userId: number) => async (dispatch: any) => {
    let response = await userApi.getMypage(userId);
    dispatch(setUserProfile(response))
};
type SetUserStatusType = {
  type: typeof SET_STATUS
  status: string
}
export const setUserStatus = (status: string):SetUserStatusType => ({type: SET_STATUS, status: status});
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await userApi.getUserStatus(userId)
    dispatch(setUserStatus(response))
};
type UpdateStatusType = {
  type: typeof UPDATE_STATUS
  status: string
}
export const updateUStatus = (status: string):UpdateStatusType => ({type: UPDATE_STATUS, status})

export const updateStatus = (status: string) => (dispatch: any) => {
    return userApi.updateUserStatus(status).then((data: any) => {
        if (data.resultCode === 0) {
            dispatch(updateUStatus(status));
        }
    })
}
export const updatePhoto = (photo: File) => (dispatch: any) => {
    return userApi.uploadPhoto(photo).then((data: any) => {
        if (data.resultCode === 0) {
            dispatch(setPhotoSuccess(data.data.photos));
        }
    })
}
export const uploadMyProfile = (profile: ProfileType) => async (dispatch: any, getState: Function) => {
    let response = await userApi.updateProfile(profile)
    const userId = getState().auth.id
    dispatch(getProfileInfo(userId));
}
type PostType = {
    id: number
    post: string
}

type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos: {
        small: string | null
        large: string | null
    }
}

let initialState = {
    posts: [
        {id: 1, post: "Привет, отличный сайт"},
        {id: 2, post: "Круто, добавь меня в друзья!"},
    ] as Array<PostType>,
    newTextPost: "" as string,
    profile: null as null | ProfileType,
    status: "" as string,
};

export type InitialStateType = typeof initialState
export let profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 3, post: action.newTextPost}],
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case UPDATE_STATUS: {
            return {...state, status: action.status}
        }
        case SET_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photo} as ProfileType}
        default:
            return state;
    }
};
