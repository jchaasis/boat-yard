import React, { Component } from 'react';

import Marina from './Marina';

//import goodies from router
import { Link } from 'react-router-dom';

//import goodies from redux
import { connect } from 'react-redux';

class MarinasList extends Component {

  render(){
    let listStyle = {
        listStyle: 'none',
    }

  const marinas = this.props.lots.map((marina, index) => <Marina key={index} marina={marina} />);

    return(

      <ul style={listStyle}>

        {marinas}
        <li className="transactionBlock">
          <Link className="transactionLink" to={'/transactions'}>
            <h3> Transactions </h3>
          </Link>
        </li>
      </ul>

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

 export default connect(mapState2Props, mapDispatch2Props) (MarinasList);
