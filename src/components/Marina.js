import React, { Component } from 'react';

//import from router
import { Link } from 'react-router-dom';

//import components
import OccupancyTracker from './OccupancyTracker'

class MarinasList extends Component {

  render(){

    return(

      <Link to={'/lots/'+this.props.marina.lotName}>
        <li> <h3>{this.props.marina.lotName} </h3></li>
        <OccupancyTracker currentLot={this.props.marina.lotName}/>
      </Link>

    )
  }
}

export default MarinasList;
