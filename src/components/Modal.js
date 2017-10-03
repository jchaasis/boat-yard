import React, { Component } from 'react';

class Modal extends Component {

  render(){


    return(
      <div className="modalStyle">
        <h2> Enter Registration Number </h2>
        <input type="text" placeholder="Number" />
        <button> Submit </button>
      </div>
    )
  }
}

export default Modal;
