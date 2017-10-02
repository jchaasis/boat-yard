import React, { Component } from 'react';
import './styles/App.css';

//import router
import { Switch, Route, Redirect} from 'react-router-dom';

//import redux goodies
import { connect } from 'react-redux';

import { displayLots } from './actions';

//import views
import LotNavigation from './components/views/LotNavigation';
import LotOverview from './components/views/LotOverview';


class App extends Component {

  componentDidMount(){
    this.props.display()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> Boat Yard </h1>
        </header>

        <main>
          <Switch>
              <Route path='/lots/:id' component={LotOverview}/>
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
    display: function(){
      fetch("https://theboatlot.herokuapp.com/lots")
        .then(resp => resp.json())
        .then( resp =>
             dispatch(displayLots(resp))
        )
    }
  }
}

export default connect(mapState2Props, mapDispatch2Props) (App);
