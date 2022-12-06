import React from "react"
import list from '../data'
import Cards from "./Cards"



const Menu = ({handleClick, cart}) => {
    return (
      <section>
          {
              list.map((item)=>(
                  <Cards key={item.id} item={item} handleClick={handleClick} />
              ))
          }
      </section>
    )
  }
  
  export default Menu