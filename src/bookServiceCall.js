import React from 'react';
import { connect } from "react-redux";
import { saveBookData } from './redux/action'
// import history from './history';
import AdminPage from './components/adminPage/adminPage'
import BookList from './components/bookList/bookList'


class ServiceCall extends React.Component {

  constructor(){
    super()
  }

  componentDidMount(){
    this.fetchBooks()
  }

  fetchBooks = () => {
    if(this.props.token){
      console.log('token', this.props.token)

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

  render(){
    const is_admin = this.props.is_admin
    console.log('inside booklist', this.props.token )
    return(
        <div> 
            {this.props.is_admin?
                <AdminPage/>
            : 
                <BookList/>
            }
        </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
      token: state.token,
      is_admin: state.is_admin
  }
)

const mapDispatchToProps = dispatch => {
    return {
      saveBookData: (val) => dispatch(saveBookData(val)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCall);
