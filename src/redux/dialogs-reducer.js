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

export let dialogsReducer = (state, action) => {
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
