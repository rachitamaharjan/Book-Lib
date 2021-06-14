import React from 'react';

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
      <div>
        book list: 
        {this.state.title.map( book => {
            return <li>{book}</li>
        })}   
      </div>
    );
  }
}

export default Title;
