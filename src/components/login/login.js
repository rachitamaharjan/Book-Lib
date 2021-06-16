import React from 'react';
import { connect } from "react-redux";
import "./login.css"
// import { bookServiceCall } from '../bookServiceCall'
import {addToken} from '../../redux/action'
import {addUsername} from '../../redux/action'
import {addAdminInfo} from '../../redux/action'


// import './title.css';

class Login extends React.Component {

  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount(){
    // this.fetchBooks()
  }

  usernameOnChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      username: e.target.value
    })
  }

  passOnChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      password: e.target.value
    })
  }

  onLogIn = () => {
    if (this.state.username !== '') {
      // this.props.addUsername(this.state.username)
      // this.props.addPassword(this.state.password)
      // this.setState({
      //   username: '',
      //   password: '',
      // })
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
            console.log(('hereeee', data));
            // this.setState({ postId: data.id })
            this.props.addToken(data.token)
            this.props.addAdminInfo(data.is_admin)
            this.props.addUsername(this.state.username)
          });
    }
    else {
      alert("Could not log in 🤷 🤷‍♂️ !!");
    }

}

  render(){
    return (
      <div className = "login-container">
        <input type = "text" className = "username" placeholder = "Username" value = {this.state.username} onChange = {this.usernameOnChange}/>
        <input type = "password" className = "username" placeholder = "Password" value = {this.state.password} onChange = {this.passOnChange}/>
        <button className = "submit-btn" onClick={this.onLogIn}>LOG IN</button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return{
//       bookdata: state.bookdata,
//   }
// }

const mapDispatchToProps = dispatch => {
  return{
    addToken: (token) => dispatch(addToken(token)),
    addUsername: (username) => dispatch(addUsername(username)),
    addAdminInfo: (is_admin) => dispatch(addAdminInfo(is_admin)),
  }
}

export default connect(0, mapDispatchToProps)(Login);
