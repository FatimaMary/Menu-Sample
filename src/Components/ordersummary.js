import React, { useState } from "react";
import Cart from "./Cart";

function Order(cart, price) {
    // const [price, setPrice] = useState(0);

    // const handlePrice = ()=>{
    //     let ans = 0;
    //     cart.map((item)=>(
    //         ans += item.amount * item.price
    //     ))
    //     setPrice(ans);
    // }

    return(
        <div>
            <table>
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
            </table>
            <button>Confirm your order</button>
        </div>
    )
}



export default Order