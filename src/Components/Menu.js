import React from "react"
import list from '../data'
import Cards from "./Cards"



const Menu = ({item, updateCart, getCountInCart}) => {
    return (
      <section>
          {
              list.map((item)=>(
                  <Cards key={(item.id)} item={item} getCountInCart={getCountInCart} updateCart={updateCart} />
              ))
          }
      </section>
    )
  }
  
  export default Menu