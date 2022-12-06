import React, { useState} from 'react';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Menu from './Components/Menu';
import './App.css'
import View from './Components/view';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Order from './Components/ordersummary';

const App = () => {
    const [show, setShow] = useState(true);
    const [cart , setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const handleClick = (item)=>{
        let isPresent = false;
        cart.forEach((product)=>{
            if (item.id === product.id)
            isPresent = true;
        })
        if (isPresent){
            setWarning(true);
            setTimeout(()=>{
            	setWarning(false);
            }, 2000);
            return ;
        }
        setCart([...cart, item]);
    }

    const handleChange = (item, d) =>{
        let ind = -1;
        cart.forEach((data, index)=>{
            if (data.id === item.id)
                ind = index;
        });
        const tempArr = cart;
        tempArr[ind].count += d;
		
        if (tempArr[ind].count === 0)
            tempArr[ind].count = 1;
        setCart([...tempArr])
    }

  return (
    <React.Fragment>
        <Navbar  setShow={setShow} />
        
        {
            show ? <Menu handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        }
        {
            warning && <div className='warning'>Item is already added to your cart</div>
        }
        <View setShow={setShow} size={cart.length} />
        {/* <BrowserRouter>
            <Routes>
                <Route path='/view' element={<Cart/>}/>
                <Route path='/ordersummary' element={<Order/>}/>
            </Routes>
        </BrowserRouter> */}
    </React.Fragment>
  )
}

export default App