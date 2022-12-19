import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import list from "../data";
import './navbar.css'

function Navbar() {
  // const [searchInput, setSearchInput] = useState("");
  
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  //   console.log(setSearchInput);
  // };
  
  // if (searchInput.length > 0) {
  //     list.filter((menu) => {
  //     return menu.name.match(searchInput);
  // });
  // }

  const [data, setData] = useState(list)

 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 React.useEffect(() => {
    const results = data.filter(menu =>
      menu.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  
  return (
    <div className="nav_boxes">
      <div className="nav_search" >
        <input type="text" 
                placeholder="Search for Dishes. . ." 
                className="nav_input" 
                value={searchTerm} 
                onChange={handleChange} />
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