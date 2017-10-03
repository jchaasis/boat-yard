import React, { Component } from 'react';

//import from router
import { UpdateBlocker } from 'react-router-dom';
//import components
import NavBar from '../NavBar';
import ParkingGrid from '../ParkingGrid';
import OccupancyTracker from '../OccupancyTracker';

class LotOverview extends Component {


  render(){

    let overview = {
      display: 'flex',
      justifyContent: 'space-around',
    }

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

export default LotOverview;
