import React from 'react';
import { connect } from "react-redux";
import { saveBookData } from './redux/action'


class ServiceCall extends React.Component {

  constructor(){
    super()
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
        // books.map(book =>
            this.props.saveBookData(books)
        // //   this.setState({
        // //     ...this.state,
        // //     title: [...this.state.title, book.title]
        // //   })
        // )
    })
  }

  render(){
    return null
  }
}

const mapDispatchToProps = dispatch => {
    return {
      saveBookData: (val) => dispatch(saveBookData(val)),
    }
  }

export default connect(0, mapDispatchToProps)(ServiceCall);
// export default connect(0, mapDispatchToProps)(ServiceCall);
