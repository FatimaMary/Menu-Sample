import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import './navbar.css'

function Navbar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="nav_boxes">
      <div className="nav_search" >
        <input type="text" 
                placeholder="Search for Dishes. . ." 
                className="nav_input" 
                value={inputText} 
                onChange={inputHandler} />
        <SearchIcon className="nav_icon" />
      </div>
      <div className="nav_box">
        <div className="nav_box1">
          <img src="images/veg.png" />
          <p>Veg</p>
          <img src="images/int.png" />
        </div>
        <div className="nav_box2">Bestseller</div>
        <div className="nav_box3">New</div>
      </div>
    </div>
  )
}


export default Navbar