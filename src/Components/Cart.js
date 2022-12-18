import React, { useState } from "react";
import { useEffect } from "react";
import './cart.css';
import Order from "./ordersummary";
import CartItemCounter from "./itemcounter";

const Cart = ({ cart, setCart, updateCart, count }) => {
    const [price, setPrice] = useState(0);


    const handlePrice = () => {
        let ans = 0;
        cart.map((singleCartItem) => (
            ans += singleCartItem.count * singleCartItem.price 
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((singleCartItem) => singleCartItem.id !== id);
        setCart(arr);
        // handlePrice();
    }
    useEffect(() => {
        handlePrice(); })
    //     setCart(localStorage.getItem('cart')
    //     ? JSON.parse(localStorage.getItem('cart')): [])
    //   }, []);
    

    const Goto = () => {
        alert("Your order Confirmed ");
    }

    return (
        <article>
            {
                cart?.map((singleCartItem) => (
                    <div className="cart_box" key={singleCartItem.id}>
                        <div className="cart_img">
                            <p>{singleCartItem.name}</p>
                        </div>
                        <div>
                            <CartItemCounter cartItem={singleCartItem} updateCart={updateCart} />
                        </div>
                        <div>
                            <span>{singleCartItem.price}</span>
                            <span>{singleCartItem.count * singleCartItem.price}</span>
                            <button onClick={() => handleRemove(singleCartItem.id)} >Remove</button>
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