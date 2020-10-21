import { userApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";
export type UserType = {
  name: string
  id: number
  uniqueUrlName:null|string
  status:null|string
  followed:boolean
  photos: {
    small: string | null
    large: string | null
  }
}
let initialState = {
  users: [] as Array<UserType>,
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [] as Array<number>,
};
export type InitialStateType = typeof initialState;

type FollowingSuccessType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId:number):FollowingSuccessType => ({ type: FOLLOW, userId: userId });
type UnfollowSuccessType = {
type:typeof UNFOLLOW
  userId: number
}
export const unfollowSuccess = (userId:number):UnfollowSuccessType => ({ type: UNFOLLOW, userId: userId });
type SetUsersType ={
  type: typeof SET_USERS
  users: any
}
export const setUsers = (users:UserType):SetUsersType => ({ type: SET_USERS, users: users });
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage:number):SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
type SetUsersCountType = {
  type: typeof SET_USERS_COUNT
  count: number
}
export const setUsersCount = (count:number):SetUsersCountType => ({ type: SET_USERS_COUNT, count });
type ToggleIsLoadingType = {
  type: typeof TOGGLE_IS_LOADING
  toggle: boolean
}
export const toggleIsLoading = (toggle:boolean):ToggleIsLoadingType => ({
  type: TOGGLE_IS_LOADING,
  toggle,
});
type ToggleFollowType = {
  type: typeof FOLLOWING_IN_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleFollow = (isFetching:boolean, userId:number):ToggleFollowType => ({
  type: FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});
export const getUsersThunkCreator1 = () => {
  return (dispatch:any) => {
    dispatch(toggleIsLoading(true));
    userApi.getUsers1().then((data:any) => {
      dispatch(toggleIsLoading(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersCount(data.totalCount));
    });
  };
};

export const getUsersThunkCreator2 = (pageNumber:number, pageSize:number) => {
  return (dispatch:any) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsLoading(true));
    userApi.getUsers2(pageNumber,pageSize).then((data:any) => {
      dispatch(toggleIsLoading(false));
      dispatch(setUsers(data.items));
    });
  }
}

export const unfollow = (userId:number) => {
  return (dispatch:any) => {
    dispatch(toggleFollow(true, userId));
                  userApi.unfollow(userId).then((data:any) => {
                    if (data.resultCode === 0) {
                      dispatch(unfollowSuccess(userId));
                      dispatch(toggleFollow(false, userId));
                    }
                  });
  }
}

export const follow = (userId:number) => {
  return (dispatch:any) => {
    dispatch(toggleFollow(true, userId));
                  userApi.follow(userId).then((data:any) => {
                    if (data.resultCode === 0) {
                      dispatch(followSuccess(userId));
                      dispatch(toggleFollow(false, userId));
                    }
                  });
  }
}

export let usersReducer = (state = initialState, action:any):InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_LOADING: {
      return { ...state, isLoading: action.toggle };
    }
    case FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id != action.userId)],
      };
    }
    default:
      return state;
  }
};
