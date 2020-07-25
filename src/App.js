import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';


class App extends React.Component {
  render() {
    return(
      <div className='wrapper'>
        <Header />
        <Nav />
        <Content />
        </div>
    );
  }
}




export default App;
