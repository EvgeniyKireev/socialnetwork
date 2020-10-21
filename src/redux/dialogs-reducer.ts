const UPDATE_NEW_TEXT_MES = "UPDATE_NEW_TEXT_MES";
const SEND_MESSAGE = "SEND-MESSAGE";
export let sendMessageActionCreator = (newMessageText: string) => ({
  type: SEND_MESSAGE,
  newMessageText
});
type dialogUserType = {
  id: number
  userName: string
}
type dialogMessageType = {
  id: number
  message: string
}

let initialState = {
  dialogUsers: [
    { id: 1, userName: "Evgeny" },
    { id: 2, userName: "Liza" },
    { id: 3, userName: "Olya" },
    { id: 4, userName: "Sasha" },
  ] as Array<dialogUserType>,
  dialogMessages: [
    { id: 1, message: "Hello how are you?" },
    { id: 2, message: "Whats app" },
    { id: 3, message: "Go walk on the street" },
    { id: 4, message: "ya poshel spat" },
  ]as Array<dialogMessageType>,
};
export type initialStateType = typeof initialState;

export let dialogsReducer = (state = initialState, action: any): initialStateType=> {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        dialogMessages: [
          ...state.dialogMessages,
          { id: 5, message: action.newMessageText },
        ],
      };
    }

    default:
      return state;
  }
};
