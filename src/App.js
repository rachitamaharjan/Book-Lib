import logo from './logo.svg';
import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Link, BrowserRouter, Switch, Redirect, NavLink } from 'react-router-dom';
import history from './history';


import BookServiceCall from './bookServiceCall'
import BookList from './components/bookList/bookList'
import NavBar from './components/navBar/navBar'
import Login from './components/login/login'
import AdminPage from './components/adminPage/adminPage'

import './App.css';
// localStorage.setItem("is_admin", null);
class App extends React.Component {
  

  render(){
    let item = localStorage.getItem("is_admin");
            // console.log('local', item)
    return (
        <Provider store = {store}>
          <BrowserRouter history={history}>
              <NavBar/>   
              <Switch>
                <Route exact path="/" component = {Login} />
                <Route exact path="/login" component = {Login} />
                <Route exact path="/books" component = {BookList} />
                <Route exact path="/books/details" component = {AdminPage} />
              {/* { is_admin? <Route exact path="/books/details" component = {AdminPage}/>} */}
                {/* <Redirect to = '/' /> */}
                {/* <Route path="/register" component={BookList} /> */}
                <Route exact path="/bookcall" component={BookServiceCall} /> 
              </Switch> 
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
