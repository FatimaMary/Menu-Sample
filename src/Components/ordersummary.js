import React, { useState } from "react";
import Cart from "./Cart";
import './Order.css';

function Order(props) {
    const { cart, price } = props
    console.log(props);

    const Message = () => {
        return(
            alert("Your order Confirmed")
        )
    }

    return(
        <div className="order">
            <table className="order-table">
                <thead className="column">
                    <tr>
                        <th style={{width:"50%"}}>Item Name</th>
                        <th >Quantity</th>
                        <th >Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map( (item)=> {
                        return(<tr key={item.id}>
                            <td style={{width:"50%"}}>{item.name}</td>
                            <td >{item.count}</td>
                            <td >{item.price}</td>
                        </tr>)
                    })}
                    <tr><td colSpan="3"><hr/></td></tr>
                    <tr>
                        <td colSpan="2"><b>Grand Total</b></td>
                        <td colSpan="2"><b>{price}</b></td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}



export default Order