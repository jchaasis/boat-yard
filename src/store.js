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
    }
  }
  return state;
}

export default createStore(reducer, {
  lots: [],
});
