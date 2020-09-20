import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
let initialState = {
  isInitialized: false,
};

export const initializeApp = () => ({
  type: INITIALIZED_SUCCESS,
});
export const initializeAppThunk = () => (dispatch) => {
  let promise = dispatch(authMe());
  Promise.all([promise]).then(() => {
    dispatch(initializeApp());
  })
}

export let initializeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        isInitialized: true
      };
    }

    default:
      return state;
  }
};
