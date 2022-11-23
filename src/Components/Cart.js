import React, { useState } from "react";
import { useEffect } from "react";
import './cart.css';
import ItemCounter from "./itemcounter";
import Order from "./ordersummary";

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

    
  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <p>{item.name}</p>
                    </div>
                    <div>
                        <ItemCounter/>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Order</span>
            <span>Rs - {price}</span>
        </div>
        <div>
            <Order/>
        </div>
    </article>
  )
}

export default Cart