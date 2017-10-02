import React, { Component } from 'react';

//import components
import MarinasList from '../MarinasList';


class LotNavigation extends Component {


  render(){
    let listStyle = {
      display: 'flex',
    }
    return(
      <div className={listStyle}>
        <MarinasList />
      </div>
    )
  }
}

export default LotNavigation;
