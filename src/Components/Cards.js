import React, { useState } from "react";
import './cards.css'
import CartItemCounter from "./itemcounter";


const Cards = ({item, updateCart, getCountInCart, singleCartItem, cart }) => {
  // const [show, setShow] = useState(true);
  // const [cart, setCart] = useState([]);

  const { symbol, name, starRate, price, image } = item;
  return (
    <div>
      <div className="cards">
        <div className="details">
          <img src={symbol} alt="Image" className="vegsymbol" />
          <p>{name}</p>
          <img src={starRate} alt="Image" />
          <p>Price - Rs.{price}</p>
        </div>
        <div className="image_box">
          <img src={image} alt="Image" className="foodimage" />
          {/* {cart?. map(item => (getCountInCart(item.id) === 0)) ? (<button onClick={() => updateCart(item, 1)} className="add_btn">ADD</button>) : <CartItemCounter updateCart={updateCart} />} */}
          <button onClick={() => updateCart(item, 1)} className="add_btn">ADD</button>
        </div>
      </div>

    </div>
  )
}

export default Cards