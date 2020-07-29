let reRenderTree = () => {
  console.log('WHATSUP');
}


let state = {
  profilePage: {
    posts: [
      { id: 1, post: "Привет, отличный сайт" },
      { id: 2, post: "Круто, добавь меня в друзья!" },
    ],
    newTextPost : ''
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
  },
};

export let addPost = () => {
  let post = {id: 3, post: state.profilePage.newTextPost};
  state.profilePage.posts.push(post);
  reRenderTree(state);
}

export let updateNewTextPost = (NewPostText) => {
  state.profilePage.newTextPost = NewPostText;
  reRenderTree(state);
}

export const subscribe = (renderFunc) => {
  reRenderTree = renderFunc;
}


export default state;
