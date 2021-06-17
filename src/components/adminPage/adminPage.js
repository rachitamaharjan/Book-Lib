import React from 'react';
import { connect } from "react-redux";
import store from '../../redux/store';
import './adminPage.css'


class AdminPage extends React.Component {

  constructor(){
    super()
  }

  onClickEdit = () => {

  }

  onClickDelete = (id) => {
      const requestOptions = {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.props.token}`
        }
      };
      fetch(`http://127.0.0.1:3000/api/books/delete/${id}`, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log('data',data)
            alert('Successfully Deleted')
            this.state.history.push("/bookcall")
          });
  }

  render(){
    return (
      <div className = "adminpage-container-wrapper">
        <div className = "adminpage-container">
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
                      console.log('this is inside admin', book)
                          return <tr className = "book-card"> 
                          <td className = "book-title-td"> 
                              {book.title}
                          </td>
                          <td className = "book-author-td"> 
                              {book.author}
                          </td>
                          <td className = "actions"> 
                              <button type = "button" className = 'btn-edit' onClick={this.onClickEdit}>&#9998;</button>
                              <button type = "button" className = 'btn-delete' onClick={this.onClickDelete.bind(this, book.id)}>&#10006;</button>
                          </td>
                          </tr>  
                      })}   
                </tbody>
            </table>
        </div>
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

// const mapDispatchToProps = dispatch => {
//   return{
//     addToken: (token) => dispatch(addToken(token)),
//     addUsername: (username) => dispatch(addUsername(username)),
//     addAdminInfo: (is_admin) => dispatch(addAdminInfo(is_admin)),
//   }
// }

// export default AdminPage;
export default connect(mapStateToProps)(AdminPage);
