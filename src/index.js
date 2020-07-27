import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import User from './components/Dialogs/User/User';
import Message from './components/Dialogs/Message/Message';
import Post from './components/Mypage/Myposts/Post/Post';


const dialogUsers = [
  {id : 1, userName : 'Evgeny'},
  {id : 2, userName : 'Liza'},
  {id : 3, userName : 'Olya'},
  {id : 4, userName : 'Sasha'},
]

const dialogMessages = [
  {message : 'Hello how are you?'},
  {message : 'Whats app'},
  {message : 'Go walk on the street'},
  {message : 'ya poshel spat'}
]

const componentUsers = dialogUsers.map((el) => <User userName={el.userName} id={el.id} />);
const componentMessage = dialogMessages.map((el) => <Message message={el.message} />);


const post = [
  {post : 'Привет, отличный сайт'},
  {post : 'Круто, добавь меня в друзья!'}
]
const componentPosts = post.map((el) => <Post text={el.post} />)


ReactDOM.render(
  <React.StrictMode>
    <App componentUsers={componentUsers} componentMessage={componentMessage} componentPosts={componentPosts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
