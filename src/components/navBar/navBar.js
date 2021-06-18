import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './navBar.css'

class NavBar extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      loggedIn: false,
      token: this.props.token
      // is_admin: localStorage.getItem("is_admin"),
      // token: localStorage.getItem("token"),
    }
  }

  

  onClickLogout = () => {
    localStorage.removeItem("token");
    this.setState({
      token: null
    })
    this.props.history.push("/login")
    // window.location.reload(true)
    // console.log('inside navbar logout token', this.state.token, this.props, this.props.token)
  }

  render(){
    console.log('token value', localStorage.getItem("token"))
    return (
      <div className = 'nav-bar-container-wrapper'>
        <div className = 'nav-bar-container'>
          <Link to={`/`} ><h2 className = 'nav-home'>BookLib</h2></Link>
          <div className = 'nav-center'>
            <Link to={`/books`} className="nav-books center"><h2 className = 'em-link'>Books</h2></Link>
            <Link to={`/favourites`} className="nav-fav center"><h2 className = 'gal-link'>Favourites</h2></Link>
            {/* {(this.state.token === null) ?  */}
            {/* {(localStorage.getItem("token") == 0 || localStorage.getItem("token") == null || localStorage.getItem("token") == undefined) ?  */}
            {/* this.props.token == 0 || this.props.token == null || this.props.token == undefined */}
            {localStorage.getItem("token") ? 
            <div className = "nav-login center" onClick = {this.onClickLogout} ><h2 className = 'gal-link'>Logout</h2></div>
            :
            <Link to={`/login`} className="nav-login center"><h2 className = 'gal-link'>Login</h2></Link>
            }
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(NavBar);
