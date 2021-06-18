import React from 'react';
import { connect } from "react-redux";
import "./addBook.css"
import {addBook} from '../../redux/action'
import {saveBookData} from '../../redux/action'
// import {addUsername} from '../../redux/action'
// import {addAdminInfo} from '../../redux/action'
import { Link, Redirect } from 'react-router-dom';
import BookServiceCall from '../../bookServiceCall';


class AddBook extends React.Component {

  constructor(){
    super()
    this.state = {
      title: '',
      genre: '',
      author: '',
      description: '',
      is_added: 0
    }
  }

  titleOnChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  genreOnChange = (e) => {
    this.setState({
      genre: e.target.value
    })
  }

  authorOnChange = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  descOnChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  // checkAdded = (e) => {
  //   this.setState({
  //     is_added: e.target.value
  //   })
  // }

  fetchData = () => {
    if(this.props.token){
      // console.log('token', this.props.token)

      const headers = { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
      }
      fetch(`http://localhost:3000/api/books`, { headers })
        .then(response => {
          return response.json()   //conversion to json
        }).then(books => { this.props.saveBookData(books) })
    }
  }
  
  onClick = () => {
      const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.props.token}`
          },
        body: JSON.stringify({ 
          title: this.state.title, 
          genre: this.state.genre,
          author: this.state.author,
          description: this.state.description
          })
      };
      fetch('http://127.0.0.1:3000/api/books/add', requestOptions)
          .then(response => response.json())
          .then(data => {
              this.setState({
                is_added: 1
              })
              this.props.addBook(data)
              this.fetchData()
              this.props.history.push("/books/details")
          });

}

  render(){
    return (
      <div>
        {/* { this.state.is_added?  */}
        {/* <BookServiceCall/>  */}
        {/* : */}
        <div className = "login-container-wrapper">
          <div className = "login-container addbook-container">
            <div className='login-msg'>Add New Book</div>
            <input type = "text" className = "username" placeholder = "Title" value = {this.state.title} onChange = {this.titleOnChange}/>
            <input type = "text" className = "password" placeholder = "Genre" value = {this.state.genre} onChange = {this.genreOnChange}/>
            <input type = "text" className = "password" placeholder = "Author" value = {this.state.author} onChange = {this.authorOnChange}/>
            <input type = "text" className = "password" placeholder = "Description" value = {this.state.description} onChange = {this.descOnChange}/>
            <button className = "submit-btn" onClick={this.onClick}>Add</button>
          </div>
        </div>
        {/* } */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        token: state.token
    }
  }

const mapDispatchToProps = dispatch => {
  return{
    addBook: (book) => dispatch(addBook(book)),
    saveBookData: (val) => dispatch(saveBookData(val)),
  }
}

// export default AddBook;
export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
