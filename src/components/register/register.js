
import React from 'react';
import { connect } from "react-redux";
import {addToken} from '../../redux/action'
import {addUsername} from '../../redux/action'
import {addAdminInfo} from '../../redux/action'
import { Link, Redirect } from 'react-router-dom';
import auth from '../../auth.js'


class Register extends React.Component {

  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      email: ''
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

  emailOnChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onClick = (e) => {
    e.preventDefault()
    if (this.state.username !== '' && this.state.password !== '' && this.state.email !== '') {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          username: this.state.username, 
          email: this.state.email,
          password: this.state.password 
          })
      };
      fetch('http://127.0.0.1:3000/api/user/register', requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log('data',data)
            this.props.history.push("/login");
          }).catch(function(err) {
            alert('Wrong Username or Password');
        });;
    }
    // else {
    //   alert("Could not Sign up 🤷 🤷‍♂️ !!");
    // }

}

  render(){
    return (
      <div className = "login-container-wrapper">
        <form className = "login-container">
          <div className='login-msg'>REGISTER</div>
          {/* <form> */}
          <input type = "text"  className = "username" placeholder = "Username" value = {this.state.username} required  onChange = {this.usernameOnChange} />
          <input type = "email" className = "username" placeholder = "Email Address" value = {this.state.email} required  onChange = {this.emailOnChange} />
          <input type = "password" className = "password" placeholder = "Password" value = {this.state.password} required  onChange = {this.passOnChange}/>
          <button type = 'submit' className = "submit-btn" onClick={this.onClick}>Enter</button>
          {/* </form> */}
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

export default Register;
// export default connect(0, mapDispatchToProps)(Register);
