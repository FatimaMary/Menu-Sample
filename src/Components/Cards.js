import React, { useState } from "react";
// import View from "./view";
import './cards.css'
import ItemCounter from "./itemcounter";
import Cart from "./Cart";
import list from "../data";


const Cards = ({item, handleClick, count, handleChange, cart}) => {
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
          {/* <div>
            {cart ? (<ItemCounter item={item} count={count} handleChange={handleChange}/>) : (<div><button onClick={() => handleClick(item)} className="add_btn">ADD</button></div>)}
          </div> */}
          <button onClick={() => handleClick(item)} className="add_btn">ADD</button>
        </div>
      </div>

    </div>
  )
}

export default Cards