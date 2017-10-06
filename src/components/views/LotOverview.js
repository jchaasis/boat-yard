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

    let overviewContainer = {

      display: 'flex',
      justifyContent: 'space-around',
    }

    //current lot pulled in from the route params
    const rp = this.props.match.params.id;

    return(
    <div className='overviewContainer'>
      <div className="navContainer">
        <NavBar />
      </div>

      <div className='lotOverview'>
        <div className="overviewHeader">
          <h1 className="title"> {rp} </h1>
          <OccupancyTracker currentLot={rp}/>
        </div>
        <ParkingGrid currentLot={rp}/>
      </div>
    </div>
    )
  }
}

export default withRouter(LotOverview);
