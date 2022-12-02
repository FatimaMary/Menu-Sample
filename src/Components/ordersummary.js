import React, { useState } from "react";
import Cart from "./Cart";

function Order(props) {
    const {cart, price, count, name, item } = props

    const Message = () => {
        return(
            alert("Your order Confirmed")
        )
    }

    return(
        <div className="order-table">
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map( (item)=> {
                        return(<tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>{item.price}</td>
                        </tr>)
                    })}
                    <tr>
                        <td colSpan="2">Grand Total</td>
                        <td colSpan="2">{price}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}



export default Order