import React, { Component } from 'react';

//import from router
import { Link } from 'react-router-dom';

//import components
import OccupancyTracker from './OccupancyTracker'

class MarinasList extends Component {

  render(){

    return(

      <Link className='navLink' to={'/lots/'+this.props.marina.lotName}>
        <li className='navLinkBlock'>
          <h3>{this.props.marina.lotName} </h3>
          <OccupancyTracker currentLot={this.props.marina.lotName}/>
        </li>
      </Link>

    )
  }
}

export default MarinasList;
