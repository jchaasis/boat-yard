import React, { Component } from 'react';

import { connect } from 'react-redux';

class OccupancyTracker extends Component {




  render(){

    //name of the current lot in the lot overview
    const currentLot = this.props.currentLot;

    //create counters to be used to measuere occupancy
    let total = 0;
    let occupied = 0;
    let available = total + occupied;


      //map through the lots that are currently held in the store and find the one whose name matches the value of the current lot.
    const Tracker = this.props.lots.map(lot => {if (lot.lotName === currentLot){
        //map through the spots array for the associated lot. If the boat value is null, add one to the available counter. If there is a value present, add one to the occuied counter.
        lot.spots.map(spot => {
          if (spot.transaction === null){
            available++
          } else {
            occupied++
          }
        })
    }});

    return(
      <div>
        <p> Occupied:{occupied} Available:{available} Total: {total} </p>
      </div>
    )
  }
}

//retrieve the state data from the store
function mapState2Props(state){
  return{
    lots: state.lots,
  }
}

//retrieve the actions to be used to upstate the store
function mapDispatch2Props(dispatch){
  return{
  }
}

 export default connect(mapState2Props, mapDispatch2Props) (OccupancyTracker);
