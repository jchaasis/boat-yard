import React, { Component } from 'react';

import { connect } from 'react-redux';

import { displayLots, calculate } from '../actions';

class Modal extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
      bill: 109,
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

  //close out the modal after you view the total bill
  handleClose(){
    this.props.submit()
  }

  handlePut(props){
    let data = [];
    //update the data in the api
    fetch(`https://theboatlot.herokuapp.com/lots/${props.spotCoords.lotId}/${props.spotCoords.spotId}`, {
             method: 'PUT',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({

               licenseNumber: null,

             }),
         })
         .then((resp) => {

            return resp.json();

           props.display(); //update the data in the store
         }).then(data => {

           this.setState({
             text: this.state.text,
             bill: data,
           })
          console.log(this.state.bill)

         }).then(() => {
           props.calculate();//update the transactions list
         });
  }

  componentWillMount() {

      let occStatus = this.props.spotCoords.occupied;

      // might need to add another condition to make sure
      // the lot and / or space has changed
      if (occStatus !== null) {
        this.handlePut(this.props);
      }
  }

  render(){

    let occStatus = this.props.spotCoords.occupied; //shorten the prop

    if (occStatus !== null){

      return(
              <div className="modalStyle">
                <h2> Your total is ${this.state.bill} </h2>
                <button onClick={()=>this.handleClose()}> OK </button>
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

function mapState2Props(state){
  return{
    transactions: state.transactions,
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
    },
    calculate: function(){
      fetch("https://theboatlot.herokuapp.com/transactions")
        .then(resp => resp.json())
        .then( resp =>
             dispatch(calculate(resp))
        )
    }
  }
}

export default (connect(mapState2Props, mapDispatch2Props)(Modal));
