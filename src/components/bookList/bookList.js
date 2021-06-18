import React from 'react';
import { connect } from "react-redux";
import "./bookList.css"
import AdminPage from '../adminPage/adminPage'

class BookList extends React.Component {

  constructor(){
    super()
  }

  clickedHollowStar = (id) => {
    // let starHollow = document.getElementById(id)
    // starHollow.classList.remove("visible")
    // starHollow.classList.add("invisible")
    // let starFilled = document.getElementById(id + 1)
    // starFilled.classList.remove("invisible")
    // starFilled.classList.add("visible")
    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.props.token}`
        },
      body: JSON.stringify({ 
        book_id: id
        })
    };
    fetch('http://127.0.0.1:3000/api/favorites', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(('added fav',data));
            // this.setState({
            //   is_added: 1
            // })
            // this.props.addBook(data)
            // this.fetchData()
            // this.props.history.push("/books/details")
        }).catch(function(err) {
          alert(err);
      });;
    
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
                        {book.title} 
                        <span className = 'star-hollow visible' id = {book.id} onClick = {() => this.clickedHollowStar(book.id)}>☆</span>
                        {/* <span className = 'star-fill invisible' id = {book.id + 1} onClick = {() => this.clickedFilledStar(book.id)}>★</span> */}
                        {/* ★ */}
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
