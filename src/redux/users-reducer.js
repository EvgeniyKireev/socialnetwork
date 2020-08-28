import { userApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";
let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [],
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersCount = (count) => ({ type: SET_USERS_COUNT, count });
export const toggleIsLoading = (toggle) => ({
  type: TOGGLE_IS_LOADING,
  toggle,
});
export const toggleFollow = (isFetching, userId) => ({
  type: FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

export const getUsersThunkCreator1 = () => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    userApi.getUsers1().then((data) => {
      dispatch(toggleIsLoading(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersCount(data.totalCount));
    });
  };
};

export const getUsersThunkCreator2 = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsLoading(true));
    userApi.getUsers2(pageNumber,pageSize).then((data) => {
      dispatch(toggleIsLoading(false));
      dispatch(setUsers(data.items));
    });
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollow(true, userId));
                  userApi.unfollow(userId).then((data) => {
                    if (data.resultCode === 0) {
                      dispatch(unfollowSuccess(userId));
                      dispatch(toggleFollow(false, userId));
                    }
                  });
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollow(true, userId));
                  userApi.follow(userId).then((data) => {
                    if (data.resultCode === 0) {
                      dispatch(followSuccess(userId));
                      dispatch(toggleFollow(false, userId));
                    }
                  });
  }
}

export let usersReducer = (state = initialState, action) => {
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
