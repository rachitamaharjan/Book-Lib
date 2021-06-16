import logo from './logo.svg';
import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Link, BrowserRouter, Switch } from 'react-router-dom';

import BookServiceCall from './bookServiceCall'
import BookList from './components/bookList/bookList'
import NavDescription from './components/descDetails'
import Login from './components/login/login'

import './App.css';

class App extends React.Component {

  render(){
    return (
      <Provider store = {store}>
        <BrowserRouter>
        <div className = 'link-container'>
          {/* <img src = {img} className = 'stuff-img' /> */}
          <Link to={`/`} ><h2 className = 'main-title'>Home</h2></Link>
          <Link to={`/books`} className="link-users"><h2 className = 'em-link'>Books</h2></Link>
          <Link to={`/favourites`} className="link-gallery"><h2 className = 'gal-link'>Favourites</h2></Link>
          <NavDescription/>   
        </div>
        <Switch>
          {/* <BookServiceCall></BookServiceCall> */}
          {/* <BookList></BookList> */}
          <Route path="/login" component = {Login} />
          <Route path="/books" component = {BookList} />
          {/* <Route path="/register" component={BookList} /> */}
          {/* <Route path="/books" component={BookServiceCall} /> */}
          {/* <Route path="/" component = {Home} /> */}
        </Switch>
      </BrowserRouter>
       
      </Provider>
    );
  }
}

export default App;
