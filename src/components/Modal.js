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

  handleTyping(e){
    this.setState({
      text: e.target.value
    })
    console.log(this.state.text)
  }
// ${this.props.spotCoords.lotId}
  handleSubmit(){

    fetch(`https://theboatlot.herokuapp.com/lots/${this.props.spotCoords.lotId}/${this.props.spotCoords.spotId}`, {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',


             },
    
             body: JSON.stringify({
                  'transaction':{
                      'boat': {
                        'licenseNumber': this.state.text,
                       }
                  }
             }),
         }).then(() => {
           this.props.display();
         });
         //refresh the data on the page
        // this.props.display();
  }

  render(){
    console.log(this.props.spotCoords);

    return(
      <div className="modalStyle">
        <h2> Enter Registration Number </h2>
        <input type="text" placeholder="Number" onChange={(event)=>this.handleTyping(event)}/>
        <button onClick={()=>this.handleSubmit()}> Submit </button>
      </div>
    )
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
