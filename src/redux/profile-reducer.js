const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST";

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewTextPostActionCreator = (text) => ({
  type: UPDATE_NEW_TEXT_POST,
  text: text,
});

let initialState = {
  posts: [
    { id: 1, post: "Привет, отличный сайт" },
    { id: 2, post: "Круто, добавь меня в друзья!" },
  ],
  newTextPost: "",
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
    default:
      return state;
  }
};
