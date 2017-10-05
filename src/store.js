import { createStore } from 'redux';

// fetch("https://theboatlot.herokuapp.com/lots")
//   .then(resp => resp.json())
//   .then( resp =>
//       console.log(resp)
// )

function reducer(state, action){
  console.log(action)

  if (action.type === 'DISPLAY'){
    return {
      lots: action.payload,
      transactions: state.transactions,
    }
  }

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
