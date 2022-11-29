import React, { useState, useNavigate } from "react";
// import {Route, BrowserRouter,}
import { useEffect } from "react";
import './cart.css';
import ItemCounter from "./itemcounter";
import Order from "./ordersummary";
// import Order from "./ordersummary";

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

        function Goto() {
            navigate("/ordersummary")
        }



    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.count * item.price
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

    const buttonClicked =  () => {
            return(
                <div>
                    {/* console.log("button Clicked"); */}
                    <Order/>
                </div>
            )
    }

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <p>{item.name}</p>
                    </div>
                    <div>
                        {/* <button onClick={() => handleChange(item,  1)}> + </button>
                        <button>{item.count}</button>
                        <button onClick={() => handleChange(item, -1)}> - </button> */}
                        <ItemCounter item={item} count={count}/>
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
            <Order onClick={Goto}></Order>
        </div>
    </article>

  )
}

export default Cart