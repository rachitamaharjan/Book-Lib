import logo from './logo.svg';
import React from 'react';
import Title from './components/bookList'
import Description from './components/descDetails'
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div>
        <Title></Title>
        <Description></Description>      
      </div>
    );
  }
}

export default App;
