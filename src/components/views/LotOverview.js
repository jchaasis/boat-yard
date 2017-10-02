import React, { Component } from 'react';

//import from router
import { } from 'react-router-dom';
import NavBar from '../NavBar';
import ParkingGrid from '../ParkingGrid';

class LotOverview extends Component {

  // componentDidMount(){
  //   fetch("https://theboatlot.herokuapp.com/lots")
  //     .then(resp => resp.json())
  //     .then( resp =>
  //         console.log(resp)
  //     )
  // }

  render(){

    let overview = {
      display: 'flex',
      justifyContent: 'space-around',
    }

    const rp = this.props.match.params.id;
    console.log(rp)

    return(
    <div style={overview}>
      <div>
        <NavBar />
      </div>
      <div>
        <h1> {rp} </h1>
        <ParkingGrid currentLot={rp}/>
      </div>
    </div>
    )
  }
}

export default LotOverview;
