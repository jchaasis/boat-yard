import React, { Component } from 'react';


class Transaction extends Component{

  render(){
    const transaction = this.props.details;
    const checkIn = this.props.details.checkedInDate;
    const checkOut = this.props.details.checkedOutDate;


    return(
      <tr className="tablerow">
        <td>
          {transaction.boat.licenseNumber}
        </td>
        <td>
          {checkIn.dayOfMonth}/{checkIn.monthValue}/{checkIn.year} @ {checkIn.hour}:{checkIn.minute}:{checkIn.second}
        </td>
        <td>
        {checkOut.dayOfMonth}/{checkOut.monthValue}/{checkOut.year} @ {checkOut.hour}:{checkOut.minute}:{checkOut.second}
        </td>
        <td>
        {transaction.totalCost}
        </td>
        <td>

        </td>
      </tr>
    )
  }
}


export default Transaction;
