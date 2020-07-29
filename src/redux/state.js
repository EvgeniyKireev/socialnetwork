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
    },
  },
  addPost() {
    let post = { id: 3, post: this.state.profilePage.newTextPost };
    this.state.profilePage.posts.push(post);
    this.reRenderTree(this.state);
  },
  updateNewTextPost(NewPostText) {
    this.state.profilePage.newTextPost = NewPostText;
    this.reRenderTree(this.state);
  },
  subscribe(renderFunc) {
    this.reRenderTree = renderFunc;
  },
  reRenderTree(){
    console.log("WHATSUP");
  }
};

export default store;