import React from "react";
// import View from "./view";
import './cards.css'
// import Cart from "./Cart";


const Cards = ({item, handleClick}) => {

    const {symbol, name, starRate, price, image} = item;
  return (
    <div>
      <div className="cards">
          <div className="details">
              <img src={symbol} alt="Image" className="vegsymbol" />
              <p>{name}</p>
              <img src={starRate} alt="Image" />
              <p>Price - {price}</p>
          </div>
          <div className="image_box">
              <img src={image} alt="Image" className="foodimage"/>
              <button onClick={()=>handleClick(item)}  className="add_btn">ADD</button>
          </div>
      </div>
      
    </div>
  )
}

export default Cards