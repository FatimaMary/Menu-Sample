import React, { useState } from 'react'
import list from '../data';

function ItemCounter({ item, handleChange }) {

    const {count} = item;
    return (
        <div>
            <button onClick={() => handleChange(item, 1)}> + </button>
            <button>{count}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
        </div>
    )
}

export default ItemCounter