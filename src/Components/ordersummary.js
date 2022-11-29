import React, { useState } from "react";
import Cart from "./Cart";

function Order(props) {
    const {cart, price } = props

    const Message = () => {
        return(
            alert("Your order Confirmed")
        )
    }

    return(
        <div>
            {/* <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map( (item, id)=> {
                        return(<tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.amount}</td>
                            <td>{item.price}</td>
                        </tr>)
                    })}
                    <tr>
                        <td colSpan="2">Grand Total</td>
                        <td colSpan="2">{price}</td>
                    </tr>
                </tbody>
            </table> */}
            <button onClick={Message}>Confirm your order</button>
        </div>
    )
}



export default Order