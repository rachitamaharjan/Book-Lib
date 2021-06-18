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
import AddBook from './components/addBook/addBook'
import EditBook from './components/editBook/editBook'

import './App.css';
// localStorage.setItem("is_admin", null);
class App extends React.Component {

  constructor(){
    super()
    this.state = {
      loggedIn: false,
      is_admin: localStorage.getItem("is_admin"),
      token: localStorage.getItem("token"),
    }
  }
  
  componentDidMount(){
    // this.setState({
    //   is_admin: localStorage.getItem("is_admin"),
    //   token: localStorage.getItem("token"),
    // })
  }
  
  render(){
    let item = localStorage.getItem("is_admin");
    let token = localStorage.getItem("token");
    console.log('token inside app',token)
            // console.log('local', item)
    return (
        <Provider store = {store}>
          <BrowserRouter history={history}>
              <NavBar token= {token}/>   
              <Switch>
                {/* <Route exact path="/" component = {Login} /> */}
                <Route exact path="/login" component = {Login} />
                {(token == 0 || token == null || token == undefined)?  <Redirect to = '/login' /> : '' }
                <Route exact path="/books" component = {BookList} />
                <Route exact path="/books/details" component = {AdminPage} />
                <Route exact path="/books/new" component = {AddBook} />
                <Route exact path="/books/edit" component = {EditBook} />
              {/* { is_admin? <Route exact path="/books/details" component = {AdminPage}/>} */}
                {/* <Route path="/register" component={BookList} /> */}
                <Route exact path="/bookcall" component={BookServiceCall} /> 
                {/* <Route exact path="/logout" component = {Logout} /> */}
              </Switch> 
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
