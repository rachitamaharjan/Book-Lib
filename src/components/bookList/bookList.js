import React from 'react';
import { connect } from "react-redux";
import "./bookList.css"
import AdminPage from '../adminPage/adminPage'

class BookList extends React.Component {

  constructor(){
    super()
  }

  render(){
    const is_admin = this.props.is_admin
    console.log('inside booklist', this.props.token )
    return (
        <div className = "main-book-container-wrapper">
          <div className = "main-book-container">
            {this.props.bookdata.map( book => {
                return (
                  <div className = "book-card"> 
                      <div className = "book-author"> 
                        {book.author}
                      </div>
                      <div className = "book-title"> 
                        {book.title} ☆
                      </div>
                      <div className = "book-genre"> 
                        Genre: {book.genre}
                      </div>
                      <div className = "book-desc"> 
                        {book.description}
                      </div>
                  </div> 
                ) 
            })}   
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
      bookdata: state.bookdata,
      token: state.token,
      is_admin: state.is_admin
  }
)

export default connect(mapStateToProps)(BookList);
