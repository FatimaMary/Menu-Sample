import React, { useState } from "react";
import './cards.css'
import CartItemCounter from "./itemcounter";


const Cards = ({item, updateCart, getCountInCart, singleCartItem, cart }) => {
 
  const { symbol, name, starRate, price, image, count } = item;
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
          {/* {getCountInCart ? <CartItemCounter cartItem={item}updateCart={updateCart} /> : (<button onClick={() => updateCart(item, 1)} className="add_btn">ADD</button>) } */}
          {getCountInCart(item.id) === 0 ? (<button onClick={() => updateCart(item, 1)} className="add_btn">ADD</button>) : <CartItemCounter cartItem={count} updateCart={updateCart} />}
          {/* <button onClick={() => updateCart(item, 1)} className="add_btn">ADD</button> */}
        </div>
      </div>

    </div>
  )
}

export default Cards