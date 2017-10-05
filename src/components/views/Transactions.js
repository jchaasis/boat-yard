import React, { Component } from 'react';

//import from router
import { withRouter } from 'react-router-dom';

//import from redux
import { connect } from 'react-redux';

//import components
import NavBar from '../NavBar';

import Transaction from '../Transaction';

class Transactions extends Component {

  render(){
    // console.log('overview');

    let overview = {
      display: 'flex',
      justifyContent: 'space-around',
    }

    const transactions = this.props.transactions.map((transaction, index) => <Transaction key={index} details={transaction} />)


    return(
    <div style={overview}>
      <div>
        <NavBar />
      </div>

      <section>
        <h1> Transactions </h1>
      <table>
        <tbody>
          <tr>
            <th>
              License Number
            </th>
            <th>
              Checked In
            </th>
            <th>
              Checked Out
            </th>
            <th>
              Total Bill
            </th>
            <th>
              Lot Number
            </th>
          </tr>

          {transactions}
          
        </tbody>
      </table>



      </section>
    </div>
    )
  }
}
//retrieve the state data from the store
function mapState2Props(state){
  return{
    transactions: state.transactions,
  }
}

//retrieve the actions to be used to upstate the store
function mapDispatch2Props(dispatch){
  return{

  }
}

export default withRouter(connect(mapState2Props, mapDispatch2Props)(Transactions));
