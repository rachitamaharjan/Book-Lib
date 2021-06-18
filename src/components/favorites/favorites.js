import React from 'react';
import { connect } from "react-redux";
// import AdminPage from '../adminPage/adminPage'
import {saveFavBooks} from '../../redux/action'
import './favorites.css'

class FavBookList extends React.Component {

  constructor(){
    super()
  }

  componentDidMount(){
    this.fetchFavorites()
  }

  fetchFavorites = () => {
    if(this.props.token){
      console.log('token', this.props.token)

      const headers = { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
      }
      fetch(`http://127.0.0.1:3000/api/favorites`, { headers })
        .then(response => {
          return response.json()   //conversion to json
        }).then(favorites => { 
          console.log('fav',favorites)
          this.props.saveFavBooks(favorites) })
          .catch( err => {
            console.log(err)
          })
    }
  }


  render(){
    const is_admin = this.props.is_admin
    console.log('inside booklist', this.props.token )
    return (
        <div className = "main-book-container-wrapper">
          <div className = "main-book-container">
            {this.props.favBookdata.map( book => {
                return (
                  <div className = "book-card"> 
                      <div className = "book-author"> 
                        {book.author}
                      </div>
                      <div className = "book-title"> 
                        {book.title} 
                        {/* <span className = 'star-hollow visible' id = {book.id} onClick = {() => this.clickedHollowStar(book.id)}>☆</span> */}
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
      favBookdata: state.favBookdata,
      token: state.token,
      is_admin: state.is_admin
  }
)

const mapDispatchToProps = dispatch => {
  return{
    saveFavBooks: (favorites) => dispatch(saveFavBooks(favorites)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavBookList);
