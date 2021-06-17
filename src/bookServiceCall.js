// import React from 'react';
// import { connect } from "react-redux";
// import { saveBookData } from './redux/action'
// import history from './history';


// class ServiceCall extends React.Component {

//   constructor(){
//     super()
//   }

//   componentDidMount(){
//     this.fetchBooks()
//   }

//   fetchBooks = () => {
//     const headers = { 
//       'Content-Type': 'application/json',
//       'Authorization': `Token ${this.props.token}`
//     }
//     fetch(`http://localhost:3000/api/books`, { headers })
//       .then(response => {
//         return response.json()   //conversion to json
//       }).then(books => {
//         console.log('all details',books)
//         // books.map(book =>
//             this.props.saveBookData(books)
//             history.push("/books");
//         // //   this.setState({
//         // //     ...this.state,
//         // //     title: [...this.state.title, book.title]
//         // //   })
//         // )
//     })
//   }

//   render(){
//     return (<div></div>)
//   }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//       saveBookData: (val) => dispatch(saveBookData(val)),
//     }
//   }

// export default connect(0, mapDispatchToProps)(ServiceCall);
// // export default connect(0, mapDispatchToProps)(ServiceCall);
