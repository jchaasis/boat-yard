import React, { Component } from 'react';

import {connect} from 'react-redux';

//import components
import Space from './Space';
import Modal from './Modal';

class ParkingGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false,
    }
  }

  handleSpotClick(){

    console.log(this.state.clicked)
    this.setState({
      clicked: !this.state.clicked,
    })

  }

  render(){

    //name of the currentLot
    const currentLot = this.props.currentLot;
    //map through the lots that are currently held in the store and find the one whose name matches the value of the current lot.
    const spaces = this.props.lots.map(lot => {if (lot.lotName === currentLot){
      //iterate through the spots array for the matching lot
      return(
      lot.spots.map( (space, index) => <Space key={index} id={index} transaction={space.transaction} clicked={()=>this.handleSpotClick()}/>))};
    });

    let toggleModal;

    if (this.state.clicked === true){
      toggleModal = <Modal />
    } else {
      toggleModal = null
    }

    return(
      <div>
      {toggleModal}
        <div className="parkingGrid">
          { spaces }
        </div>
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

 export default connect(mapState2Props, mapDispatch2Props) (ParkingGrid);
