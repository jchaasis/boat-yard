import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Marina from './Marina';

class NavBar extends Component {

  render(){

  const marinas = this.props.lots.map((marina, index) => <Marina key={index} marina={marina} />);

    return(
      <div>
        <ul>
          { marinas }
          <li>
            <Link to={'/transactions'}>
              <h3> Transactions </h3>
            </Link>
          </li>
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
