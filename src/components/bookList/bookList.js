import React from 'react';
import { connect } from "react-redux";
import "./bookList.css"
// import { bookServiceCall } from '../bookServiceCall'


// import './title.css';

class Title extends React.Component {

  constructor(){
    super()
    this.state = {
      title : ["Prince of persia", "Wall of Storms"]
    }
  }

  componentDidMount(){
    this.fetchBooks()
  }

  fetchBooks = () => {
    fetch(`http://localhost:3000/api/books`)
      .then(response => {
        return response.json()   //conversion to json
      }).then(books => {
        console.log('all details',books)
        books.map(book =>
          this.setState({
            ...this.state,
            title: [...this.state.title, book.title]
          })
        )
    })
  }

  // componentDidUpdate(){
  //   this.setState({ 
  //     ...this.state, 
  //     title2: "Harry Potter" 
  //   })
  // }

  render(){
    return (
      <div className = "main-book-container">
        {/* {this.state.title.map( book => { */}
        {this.props.bookdata.map( book => {
          console.log('val', book)
            return <div className = "book-card"> 
              <div className = "book-author"> 
                {book.author}
              </div>
              <div className = "book-title"> 
                {book.title}
              </div>
              <div className = "book-genre"> 
                Genre: {book.genre}
              </div>
              <div className = "book-desc"> 
                {book.description}
              </div>
            </div>  
        })}   
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
      bookdata: state.bookdata,
  }
)

export default connect(mapStateToProps, 0)(Title);
