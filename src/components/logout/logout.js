import React from 'react';
import { connect } from "react-redux";
import "./Logout.css"
import {addToken} from '../../redux/action'
import {addUsername} from '../../redux/action'
import {addAdminInfo} from '../../redux/action'
import { Link, Redirect } from 'react-router-dom';
import auth from '../../auth.js'


class Login extends React.Component {

  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      // loggedIn: false,
    }
  }

  render(){
    return (<div></div>);
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addToken: (token) => dispatch(addToken(token)),
    addUsername: (username) => dispatch(addUsername(username)),
    addAdminInfo: (is_admin) => dispatch(addAdminInfo(is_admin)),
  }
}

export default Login;
// export default connect(0, mapDispatchToProps)(Login);
