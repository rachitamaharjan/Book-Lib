import React from 'react';
import { connect } from "react-redux";
import "./editBook.css"
import { Link, Redirect } from 'react-router-dom';
import BookServiceCall from '../../bookServiceCall';


class EditBook extends React.Component {

  constructor(){
    super()
    this.state = {
      title: '',
      genre: '',
      author: '',
      description: '',
      is_changed: 0,
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
              console.log(('edited',data));
              this.setState({
                is_changed: 1
              })
          });

}

  render(){
    return (
      <div>
          { this.state.is_changed? 
          <BookServiceCall/> 
          :
          <div className = "login-container-wrapper">
            <div className = "login-container addbook-container">
              <div className='login-msg'>Edit Book</div>
              <input type = "text" className = "username" placeholder = "Title" value = {this.state.title} onChange = {this.titleOnChange}/>
              <input type = "text" className = "password" placeholder = "Genre" value = {this.state.genre} onChange = {this.genreOnChange}/>
              <input type = "text" className = "password" placeholder = "Author" value = {this.state.author} onChange = {this.authorOnChange}/>
              <input type = "text" className = "password" placeholder = "Description" value = {this.state.description} onChange = {this.descOnChange}/>
              <button className = "submit-btn" onClick={this.onClick}>Add</button>
            </div>
          </div>
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        bookdata: state.bookdata,
        token: state.token
    }
  }

export default connect(mapStateToProps)(EditBook);
