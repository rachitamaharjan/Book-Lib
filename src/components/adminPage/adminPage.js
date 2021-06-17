import React from 'react';
import { connect } from "react-redux";
import store from '../../redux/store';



// import './title.css';

class AdminPage extends React.Component {

  constructor(){
    super()
    this.state = {
        bookdata: null
    //   username: '',
    //   password: '',
    }
  }

//   componentWillMount() {
//     // const { bookdata } = this.props
//     this.setState({
//               bookdata: this.props.bookdata
//             })
//     // if (bookdata) this.setState(prevState => ({ bookdata: prevState.bookdata = bookdata }))
//    }
  
componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("vhanged");
    // const { bookdata } = nextProps
    if(this.props.bookdata && this.props.bookdata !== prevProps.bookdata){this.setState({
        bookdata: this.props.bookdata,
      })}
  }

  componentDidMount(){
      console.log('component',{store})
      store.subscribe(this.forceUpdate.bind(this))


    // this.fetchBooks()
  }

//   usernameOnChange = (e) => {
//     // console.log(e.target.value);
//     this.setState({
//       username: e.target.value
//     })
//   }

//   passOnChange = (e) => {
//     // console.log(e.target.value);
//     this.setState({
//       password: e.target.value
//     })
//   }

//   onLogIn = () => {
//     if (this.state.username !== '') {
//       // this.props.addUsername(this.state.username)
//       // this.props.addPassword(this.state.password)
//       // this.setState({
//       //   username: '',
//       //   password: '',
//       // })
//       const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ 
//           username: this.state.username, 
//           password: this.state.password 
//           })
//       };
//       fetch('http://127.0.0.1:3000/api/user/login', requestOptions)
//           .then(response => response.json())
//           .then(data => {
//             console.log(('hereeee', data));
//             // this.setState({ postId: data.id })
//             this.props.addToken(data.token)
//             this.props.addAdminInfo(data.is_admin)
//             this.props.addUsername(this.state.username)
//           });
//     }
//     else {
//       alert("Could not log in 🤷 🤷‍♂️ !!");
//     }

// }

  render(){
      console.log('iihh',this.state.bookdata)
    return (
      <div className = "adminpage-container">
          <table>
              <thead>
                  <tr>
                      <th>S. N.</th>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {this.props.bookdata.map( book => {
                    console.log('this is inside admin', book)
                        return <tr className = "book-card"> 
                        <td className = "book-title"> 
                            {book.title}
                        </td>
                        <td className = "book-author"> 
                            {book.author}
                        </td>
                        <td className = "actions"> 
                            <button type = "button" name = 'edit'>&#9998;</button>
                            <button type = "button" name = 'delete'>&#10006;</button>
                            {/* Genre: {book.genre} */}
                        {/* </td>
                        <td className = "book-desc">  */}
                            {/* {book.description} */}
                        </td>
                        </tr>  
                    })}   
                      {/* <td>1</td>
                      <td>{this.props.bookdata.title}</td>
                      <td>Fantasy</td>
                      <td>
                          <button type = "button" name = 'edit'>&#9998;</button>
                          <button type = "button" name = 'delete'>&#10006;</button>
                      </td> */}
                  {/* </tr> */}
              </tbody>
          </table>
        {/* <input type = "text" className = "username" placeholder = "Username" value = {this.state.username} onChange = {this.usernameOnChange}/>
        <input type = "password" className = "username" placeholder = "Password" value = {this.state.password} onChange = {this.passOnChange}/>
        <button className = "submit-btn" onClick={this.onLogIn}>LOG IN</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
      bookdata: state.bookdata,
  }
}

// const mapDispatchToProps = dispatch => {
//   return{
//     addToken: (token) => dispatch(addToken(token)),
//     addUsername: (username) => dispatch(addUsername(username)),
//     addAdminInfo: (is_admin) => dispatch(addAdminInfo(is_admin)),
//   }
// }

// export default AdminPage;
export default connect(mapStateToProps)(AdminPage);
