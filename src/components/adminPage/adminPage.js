import React from 'react';
import { connect } from "react-redux";
import store from '../../redux/store';
import './adminPage.css'
import {Redirect, Link, withRouter} from 'react-router-dom'
import {saveBookData} from '../../redux/action'

class AdminPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      genre: '',
      author: '',
      description: '',
      updating: 0,
      edit_id: null
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

  onClickEdit = (book) => {
    this.setState({
      updating: 1,
      edit_id: book.id,
      title: book.title,
      genre: book.genre,
      author: book.author,
      description: book.description,
    })
  }

  fetchData = () => {
    if(this.props.token){
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

  onClickEditForm = () => {
    const requestOptions = {
      method: 'PATCH',
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
    fetch(`http://127.0.0.1:3000/api/books/${this.state.edit_id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            this.setState({
              updating: 0
            })
        });
        this.fetchData()
  }

  onClickDelete = (id) => {
      const requestOptions = {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.props.token}`
        }
      };
      fetch(`http://127.0.0.1:3000/api/books/${id}`, requestOptions)
          .then(response => response.json())
          .then(data => {
            const newBookData = this.props.bookdata.filter( book => {
              return (book.id !== id)
            })
            this.props.saveBookData(newBookData)
          });
  }

  render(){
    return (
      <div>
        {this.state.updating? 
        <div className = "login-container-wrapper">
          <div className = "login-container addbook-container">
            <div className='login-msg'>Edit Book</div>
            <input type = "text" className = "username" placeholder = "Title" value = {this.state.title} onChange = {this.titleOnChange}/>
            <input type = "text" className = "password" placeholder = "Genre" value = {this.state.genre} onChange = {this.genreOnChange}/>
            <input type = "text" className = "password" placeholder = "Author" value = {this.state.author} onChange = {this.authorOnChange}/>
            <input type = "text" className = "password" placeholder = "Description" value = {this.state.description} onChange = {this.descOnChange}/>
            <button className = "submit-btn" onClick={this.onClickEditForm}>Edit</button>
          </div>
        </div>
        :
        <div className = "adminpage-container-wrapper">
          <div className = "adminpage-container">
            <Link to = {`/books/new`}>
              <button type = 'button' className = 'add-btn'>+</button>
            </Link>
              <table>
                  <thead>
                      <tr>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.props.bookdata.map( book => {
                        console.log('props inside admin', this.props)
                            return <tr className = "book-card"> 
                            <td className = "book-title-td"> 
                                {book.title}
                            </td>
                            <td className = "book-author-td"> 
                                {book.author}
                            </td>
                            <td className = "actions"> 
                                  <button type = "button" className = 'btn-edit' onClick={() => this.onClickEdit(book)}>&#9998;</button>
                                <button type = "button" className = 'btn-delete' onClick={() => this.onClickDelete(book.id)}>&#10006;</button>
                            </td>
                            </tr>  
                        })}   
                  </tbody>
              </table>
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

const mapDispatchToProps = dispatch => {
  return{
    saveBookData: (newBookData) => dispatch(saveBookData(newBookData)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPage));
