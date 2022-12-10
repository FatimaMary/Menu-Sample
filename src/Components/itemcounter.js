import React, { useState } from 'react'
import list from '../data';

function CartItemCounter({ cartItem, updateCart }) {

    // const itemCounter = (cartItem, updateCart)
    return (
        <div>
            <button onClick={() => updateCart(cartItem, 1)}> + </button>
            <button>{cartItem.count}</button>
            <button onClick={() => updateCart(cartItem, -1)}> - </button>
        </div>
    )
}

export default CartItemCounter