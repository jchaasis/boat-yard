import React, { Component } from 'react';

//import components


class Space extends Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false,
    }
  }

  handleClick(){
    this.props.clicked()
    console.log('clicked')
    console.log(this.props.id);
  }

  //
  // if( this.props.boat === null){
  //   return(
  //   <div style={spaceStyle} onClick={()=>this.handleClick()}>
  //   </div>
  //   )
  // } else {
  //
  //   return(
  //   <div style={spaceStyle} onClick={()=>this.handleClick()}>
  //     <h1 className="boat">&#128741;</h1>
  //   </div>
  //   )
  // }

  // this.state.occupied ? (return(
  //   <div style={spaceStyle} onClick={()=>this.handleClick()}>
  //     <h1 className="boat">&#128741;</h1>
  //   </div>)
  // ) : (return(
  //
  //   <div style={spaceStyle} onClick={()=>this.handleClick()}>
  //    </div>
  //           )
  //     )
//
//   if( this.props.boat === null){
//     this.setState({
//       occupied: false,
//     })
//   } else {
//     this.setState({
//       occupied: true,
//   })
// }
//
// if (this.state.occupied === false){
//   return(
//   <div style={spaceStyle}   onClick={()=>this.handleClick()}>
//   </div>)
// } else {
//   return(
//   <div style={spaceStyle} onClick={()=>this.handleClick()}>
//      <h1 className="boat">&#128741;</h1>
//    </div>)
// }

  render(){

    let spaceStyle = {
      width: "100px",
      height: "100px",
      backgroundColor:"blue",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor:"black"
    }

    if( this.props.transaction === null){
      return(
      <div style={spaceStyle} onClick={()=>this.handleClick()}>
      </div>
      )
    } else {

      return(
      <div style={spaceStyle} onClick={()=>this.handleClick()}>
        <h1 className="boat">&#128741;</h1>
      </div>
      )
    }
  }
}

export default Space;
