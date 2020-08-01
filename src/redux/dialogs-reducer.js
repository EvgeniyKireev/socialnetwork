const UPDATE_NEW_TEXT_MES = "UPDATE_NEW_TEXT_MES";
const SEND_MESSAGE = "SEND-MESSAGE";
export let updateNewTextMesActionCreator = (text) => ({
  type: UPDATE_NEW_TEXT_MES,
  text: text,
});
export let sendMessageActionCreator = (text) => ({
  type: SEND_MESSAGE,
  text: text,
});

let initialState = {
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
};

export let dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_TEXT_MES:
      state.newMessageText = action.text;
      return state;
    case SEND_MESSAGE:
      let body = { message: action.text };
      state.dialogMessages.push(body);
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};
