import { createStore } from 'redux';

// fetch("https://theboatlot.herokuapp.com/lots")
//   .then(resp => resp.json())
//   .then( resp =>
//       console.log(resp)
// )

function reducer(state, action){
  console.log(action)
  //Update the information in the lots array
  if (action.type === 'DISPLAY'){
    return {
      lots: action.payload,
      transactions: state.transactions,
    }
  }
  //update the information in the transactions array
  if (action.type === 'CALCULATE'){
    return{
      lots: state.lots,
      transactions: action.payload
    }
  }

  return state;
}

export default createStore(reducer, {
  lots: [],
  transactions: [],
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
