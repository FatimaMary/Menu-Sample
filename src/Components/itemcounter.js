import React from 'react'

const ItemCounter = (count, handleChange, item) => {

    return (
        <div>
            <button onClick={() => handleChange(item,  1)}> + </button>
            <button>{count}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
        </div>
    )
}

export default ItemCounter