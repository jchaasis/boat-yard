import React, { Component } from 'react';

//import from router
import { withRouter } from 'react-router-dom';
//import components
import NavBar from '../NavBar';
import ParkingGrid from '../ParkingGrid';
import OccupancyTracker from '../OccupancyTracker';

class LotOverview extends Component {

  render(){
    // console.log('overview');

    let overview = {
      display: 'flex',
      justifyContent: 'space-around',
    }

    //current lot pulled in from the route params
    const rp = this.props.match.params.id;

    return(
    <div style={overview}>
      <div>
        <NavBar />
      </div>

      <div>
        <h1> {rp} </h1>
        <OccupancyTracker currentLot={rp}/>
        <ParkingGrid currentLot={rp}/>
      </div>
    </div>
    )
  }
}

export default withRouter(LotOverview);
