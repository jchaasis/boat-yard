//Actions:

  // - toggle space occupancy
  //   -2 actions
  // - calculate cost
  //   -
  // - view lot?


export function displayLots(dispLots){
  return{
    type:'DISPLAY',
    payload: dispLots,
  }
}

export function calculate(trans){
  return{
    type: 'CALCULATE',
    payload: trans,
  }
}
