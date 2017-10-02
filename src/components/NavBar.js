import React, { Component } from 'react';

import { connect } from 'react-redux';

import Marina from './Marina';

class NavBar extends Component {

  render(){

  const marinas = this.props.lots.map((marina, index) => <Marina key={index} name={marina.lotName} />);

    return(
      <div>
        <ul >
          {marinas}
        </ul>
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

 export default connect(mapState2Props, mapDispatch2Props) (NavBar);
