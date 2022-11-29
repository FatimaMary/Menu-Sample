import React, { useState } from "react";
// import View from "./view";
import './cards.css'
import ItemCounter from "./itemcounter";
import Cart from "./Cart";


const Cards = ({ item, handleClick, handleChange }) => {
  const [show, setShow] = useState(true);
  const [cart , setCart] = useState([]);

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
          <div>
            {{item.find((x) => x.id===product.id)} ? ( <div>
              <button onClick={() => handleChange(item, 1)}> + </button>
              <button>{item.count}</button>
              <button onClick={() => handleChange(item, -1)}> - </button></div>) : (<div><button onClick={() => handleClick(item)} className="add_btn">ADD</button></div>)}
          </div>
          {/* <button onClick={() => handleClick(item)} className="add_btn">ADD</button> */}
        </div>
      </div>

    </div>
  )
}

export default Cards