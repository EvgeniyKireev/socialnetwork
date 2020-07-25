import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Mypage from './components/Mypage/Mypage';


class App extends React.Component {
  render() {
    return(
      <div className='wrapper'>
        <Header />
        <Nav />
        <div className='mcontent'>
        <Mypage />
        </div>
        </div>
    );
  }
}




export default App;
