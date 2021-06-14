import logo from './logo.svg';
import React from 'react';
import Title from './components/bookList/bookList'
import Description from './components/descDetails'
import BookServiceCall from './bookServiceCall'
import store from './redux/store';
import { Provider } from 'react-redux';

import './App.css';

class App extends React.Component {

  render(){
    return (
      <Provider store = {store}>
        <BookServiceCall></BookServiceCall>
        <Title></Title>
        <Description></Description>      
      </Provider>
    );
  }
}

export default App;
