import React, { Component } from 'react';

import { connect } from 'react-redux';

import { displayLots } from '../actions';

class Modal extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
    }
  }
  //handle typing so that the text input is stored in the state to then be posted to the api.
  handleTyping(e){
    this.setState({
      text: e.target.value
    })
  }

  //when the submit button is clicked:
  handleSubmit(){

    console.log(this.state.text)

    //post the new information
    fetch(`https://theboatlot.herokuapp.com/lots/${this.props.spotCoords.lotId}/${this.props.spotCoords.spotId}`, {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({

                        licenseNumber: this.state.text,

             }),
         }).then(() => {
           this.props.display(); //update the data in the store
         }).then(()=> {
           this.props.submit()//hide the modal dialog after submission
         })
  }

  render(){
    console.log(this.props.spotCoords);
    let occStatus = this.props.spotCoords.occupied; //shorten the prop
    console.log(occStatus)
    if (occStatus !== null){
      return (
        

        <div className="modalStyle">
          <h2> Your total is  </h2>
          <button onClick={()=>this.handleSubmit()}> OK </button>
        </div>
      )
    } else {
          return(
            <div className="modalStyle">
              <h2> Enter Registration Number </h2>
              <input type="text" placeholder="Number" onChange={(event)=>this.handleTyping(event)}/>
              <button onClick={()=>this.handleSubmit()}> Submit </button>
            </div>
        )
      }
  }
}

//retrieve the actions to be used to upstate the store
function mapDispatch2Props(dispatch){
  return{
    display: function(){
      fetch("https://theboatlot.herokuapp.com/lots")
        .then(resp => resp.json())
        .then( resp =>
             dispatch(displayLots(resp))
        )
    }
  }
}

export default (connect(null, mapDispatch2Props)(Modal));
