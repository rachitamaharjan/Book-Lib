import React from 'react';
import { Link, BrowserRouter, Switch, Redirect, NavLink } from 'react-router-dom';
import './navBar.css'

class NavBar extends React.Component {

  render(){
    return (
      <div className = 'nav-bar-container-wrapper'>
        <div className = 'nav-bar-container'>
          <Link to={`/`} ><h2 className = 'nav-home'>BookLib</h2></Link>
          <div className = 'nav-center'>
            <Link to={`/books`} className="nav-books center"><h2 className = 'em-link'>Books</h2></Link>
            <Link to={`/favourites`} className="nav-fav center"><h2 className = 'gal-link'>Favourites</h2></Link>
            <Link to={`/login`} className="nav-login center"><h2 className = 'gal-link'>login</h2></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
