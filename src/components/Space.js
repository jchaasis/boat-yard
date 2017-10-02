import React, { Component } from 'react';

class Space extends Component {

  handleClick(){

    // console.log({this.props.boat})
  }

  render(){
    let spaceStyle = {
      width: "100px",
      height: "100px",
      backgroundColor:"blue",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor:"black"
    }

    if( this.props.boat === null){
      return(
      <div style={spaceStyle} >

      </div>
      )
    } else {
      return(
      <div style={spaceStyle} >
        <h1 className="boat">&#128741;</h1>
      </div>
      )
    }

  }
}

export default Space;
