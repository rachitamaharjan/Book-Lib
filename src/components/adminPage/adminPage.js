import React from 'react';
import { connect } from "react-redux";
import store from '../../redux/store';



class AdminPage extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
      <div className = "adminpage-container">
          <table>
              <thead>
                  <tr>
                      <th>S. N.</th>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {this.props.bookdata.map( book => {
                    console.log('this is inside admin', book)
                        return <tr className = "book-card"> 
                        <td className = "book-title"> 
                            {book.title}
                        </td>
                        <td className = "book-author"> 
                            {book.author}
                        </td>
                        <td className = "actions"> 
                            <button type = "button" name = 'edit'>&#9998;</button>
                            <button type = "button" name = 'delete'>&#10006;</button>
                        </td>
                        </tr>  
                    })}   
              </tbody>
          </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
      bookdata: state.bookdata,
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
