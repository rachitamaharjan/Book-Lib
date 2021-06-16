import React from 'react';
import { connect } from "react-redux";
import { saveBookData } from '../redux/action'

class NavDescription extends React.Component {

  render(){
    return (
      <div>
        Welcome, {this.props.username}    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
      username: state.username,
  }
}

export default connect(mapStateToProps,0)(NavDescription);
