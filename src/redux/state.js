import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';
const UPDATE_NEW_TEXT_MES = 'UPDATE_NEW_TEXT_MES';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, post: "Привет, отличный сайт" },
        { id: 2, post: "Круто, добавь меня в друзья!" },
      ],
      newTextPost: "",
    },
    dialogsPage: {
      dialogUsers: [
        { id: 1, userName: "Evgeny" },
        { id: 2, userName: "Liza" },
        { id: 3, userName: "Olya" },
        { id: 4, userName: "Sasha" },
      ],
      dialogMessages: [
        { message: "Hello how are you?" },
        { message: "Whats app" },
        { message: "Go walk on the street" },
        { message: "ya poshel spat" },
      ],
      newMessageText : '123',
    },
  },
  subscribe(renderFunc) {
    this.reRenderTree = renderFunc;
  },
  reRenderTree(){
    console.log("WHATSUP");
  },
  dispatch(action) {
    this.state.profilePage = profileReducer(this.state.profilePage, action);
    this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)

    this.reRenderTree(this.state);

  },
};





export default store;