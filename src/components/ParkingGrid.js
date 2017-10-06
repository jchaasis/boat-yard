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
      spotCoords: '',
    }
  }

  //when a spot is clicked, toggle the visibility of the modal dialog and grab the spot and lot coordinates from that particular spot.
  handleSpotClick(coords){
    this.setState({
      clicked: !this.state.clicked,
      spotCoords: coords,
    })
  }

  //when the submit on the modal dialog box is clicked, revert the state and clear the spot coords to prepare for the next parker.
  handleSubmit(){
    this.setState({
      clicked: !this.state.clicked,
      spotCoords: '',
    })
  }

  render(){

    //name of the currentLot
    const currentLot = this.props.currentLot;
    //map through the lots that are currently held in the store and find the one whose name matches the value of the current lot.
    const spaces = this.props.lots.map(lot => {if (lot.lotName === currentLot){
      let lotId = lot.id;
      //iterate through the spots array for the matching lot
      return(
      lot.spots.map( (space, index) => <Space key={index} id={index} lotId={lotId} transaction={space.transaction} clicked={coords=>this.handleSpotClick(coords)}/>))};
    });

    let toggleModal; //variable to be used to show the modal dialog box

    //when the state shows that a spot has been clicked, render the modal dialog box. After he license number has been submitted, make the box disapear
    if (this.state.clicked === true){

      toggleModal = <Modal spotCoords={this.state.spotCoords} submit={ () => this.handleSubmit()}/>

    } else {
      toggleModal = null
    }

    return(
      <div className="grid">
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
