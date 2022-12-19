import React, { useState} from 'react';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Menu from './Components/Menu';
import './App.css'
import View from './Components/view';

const App = ({ searchInput }) => {
    const [show, setShow] = useState(true);
    const [cart , setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const getCountInCart = (itemId) => {
        // If present in CART, return count
        cart.forEach((product) => {
            if (itemId === product.id) 
                return product.count;
          });
    
          // If the item not exists in the CART, return as 0
          return 0;
    }
    
    const updateCart = (item, changeCount) => {
      // If item already exists in CART
    
      let isPresent = false;
      cart.forEach((product) => {
        if (item.id === product.id) isPresent = true;
      });
    
      if (isPresent) {
        //Find the index of the item in CART
        var indexInCart = -1;
        cart.forEach((data, index) => {
          if (data.id === item.id) {
            indexInCart = index;
          }
        });
    
        const tempArr = cart;
        tempArr[indexInCart].count += changeCount;
    
        setCart([...tempArr]);
        localStorage.setItem("cart", JSON.stringify(tempArr));
      } else {
        // Item not exist in cart, Adding for the first time
        setCart([...cart, {...item, count: 1}]);
        localStorage.setItem("cart", JSON.stringify([...cart, {...item, count: 1}]));
      }
    };
    // Main Menu Page
    // --------------
    
    // const itemCounter = (item, updateCart, getCountInCart) 
    
    // {getCountInCart(item.id)}
    
    // {getCountInCart(item.id) == 0 ? <AddButton /> : <itemcounter />}
  return (
    <React.Fragment>
        <Navbar  setShow={setShow}  />
        
        {
            show ? <Menu updateCart={updateCart}  getCountInCart={getCountInCart}/> : <Cart cart={cart} setCart={setCart} updateCart={updateCart} getCountInCart={getCountInCart} />
        }
        {
            warning && <div className='warning'>Item is already added to your cart</div>
        }
        <View setShow={setShow} size={cart.length} />
    </React.Fragment>
  )
}

export default App