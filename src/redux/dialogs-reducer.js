const UPDATE_NEW_TEXT_MES = "UPDATE_NEW_TEXT_MES";
const SEND_MESSAGE = "SEND-MESSAGE";
export let sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});
export let updateNewTextMesActionCreator = (text) => ({
  type: UPDATE_NEW_TEXT_MES,
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
    { id: 1, message: "Hello how are you?" },
    { id: 2, message: "Whats app" },
    { id: 3, message: "Go walk on the street" },
    { id: 4, message: "ya poshel spat" },
  ],
  newMessageText: "123",
};

export let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_TEXT_MES: {
      return { ...state, newMessageText: action.text };
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        dialogMessages: [
          ...state.dialogMessages,
          { id: 5, message: state.newMessageText },
        ],
      };
    }

    default:
      return state;
  }
};
