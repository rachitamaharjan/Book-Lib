import React from 'react';
import { connect } from "react-redux";
import {addToken} from '../../redux/action'
import {addUsername} from '../../redux/action'
import {addAdminInfo} from '../../redux/action'
import { Link, Redirect } from 'react-router-dom';
import auth from '../../auth.js'
import './login.css'

class Login extends React.Component {

  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      // loggedIn: false,
    }
  }

  usernameOnChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  passOnChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  onClick = (e) => {
    e.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          username: this.state.username, 
          password: this.state.password 
          })
      };
      fetch('http://127.0.0.1:3000/api/user/login', requestOptions)
          .then(response => response.json())
          .then(data => {
            this.props.addToken(data.token)
            this.props.addAdminInfo(data.is_admin)
            this.props.addUsername(this.state.username)
            localStorage.setItem("token",data.token);
            console.log('inside login token',localStorage.getItem("token"))
            auth.login(() => {
              localStorage.setItem("is_admin",data.is_admin);
              // localStorage.setItem("token",data.token);
              console.log('local is admin',localStorage.getItem("is_admin"))
              this.props.history.push("/bookcall");
            })
          }).catch(function(err) {
            // console.log(err)
            alert('Wrong Username or Password');
        });;
    }
    // else {
    //   alert("Could not log in 🤷 🤷‍♂️ !!");
    // }
}

  render(){
    return (
      <div className = "login-container-wrapper">
        <form className = "login-container">
          <div className='login-msg'>LOG IN</div>
          <input type = "text" className = "username" placeholder = "Username" value = {this.state.username} required onChange = {this.usernameOnChange}/>
          <input type = "password" className = "password" placeholder = "Password" value = {this.state.password} required onChange = {this.passOnChange}/>
          <button type = 'submit' className = "submit-btn" onClick={this.onClick}>Enter</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addToken: (token) => dispatch(addToken(token)),
    addUsername: (username) => dispatch(addUsername(username)),
    addAdminInfo: (is_admin) => dispatch(addAdminInfo(is_admin)),
  }
}

export default connect(0, mapDispatchToProps)(Login);

