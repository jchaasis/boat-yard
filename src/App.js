import React, { Component } from 'react';
import './styles/App.css';

//import router
import { Switch, Route, withRouter } from 'react-router-dom';

//import redux goodies
import { connect } from 'react-redux';

//import actions
import { displayLots, calculate } from './actions';

//import views
import LotNavigation from './components/views/LotNavigation';
import LotOverview from './components/views/LotOverview';
import Transactions from './components/views/Transactions';

class App extends Component {


  componentDidMount(){
    this.props.display()
    this.props.calculate()
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        
        </header>
        <main>
          <Switch>
              <Route path='/lots/:id' component={LotOverview}/>
              <Route path='/transactions' component={Transactions}/>
              <Route path='/' component={LotNavigation}/>
          </Switch>
        </main>
      </div>
    );
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
    //fetch the lot data
    display: function(){
      fetch("https://theboatlot.herokuapp.com/lots")
        .then(resp => resp.json())
        .then( resp =>
             dispatch(displayLots(resp))
        )
    },
    //fetch the transaction data
    calculate: function(){
      fetch("https://theboatlot.herokuapp.com/transactions")
        .then(resp => resp.json())
        .then( resp =>
             dispatch(calculate(resp))
        )
    }
  }
}

export default withRouter(connect(mapState2Props, mapDispatch2Props)(App));
