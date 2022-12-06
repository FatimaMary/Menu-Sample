import React, { useState } from "react";
// import {Route, BrowserRouter,}
import { useEffect } from "react";
import './cart.css';
import ItemCounter from "./itemcounter";
import { useNavigate } from 'react-router-dom'
import Order from "./ordersummary";
// import Order from "./ordersummary";

const Cart = ({ cart, setCart, handleChange, item, count }) => {
    const [price, setPrice] = useState(0);
    // const navigate = useNavigate();

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.count * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(() => {
        handlePrice();
    })

    const Goto = () => {
        alert("Your order Confirmed");
        // navigate("/ordersummary")
    }

    return (
        <article>
            {
                cart?.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <ItemCounter item={item} count={count} handleChange={handleChange} />
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <button onClick={() => handleRemove(item.id)} >Remove</button>
                        </div>
                    </div>
                ))}
            <div className='total'>
                <span>Total Price of your Order</span>
                <span>Rs - {price}</span>
            </div>
            <Order cart={cart} price={price} count={count} /> 
            <div>
            <button onClick={Goto} className="cart-order">Confirm your order</button>
            </div>
        </article>

    )
}

export default Cart