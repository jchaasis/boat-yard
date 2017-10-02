import React, { Component } from 'react';

//import from router
import { NavLink } from 'react-router-dom';

class MarinasList extends Component {

  render(){
    return(
      <NavLink to={'/lots/'+this.props.name}>
        <li> {this.props.name} </li>
      </NavLink>
    )
  }
}

export default MarinasList;
