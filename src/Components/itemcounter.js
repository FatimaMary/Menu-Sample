import React, { useState } from 'react'
import list from '../data';

// const ItemCounter = ({count, handleChange, item}) => {
            
//     return (
//         <div>
//             <button onClick={() => handleChange(item,  1)}> + </button>
//             <button>{count}</button>
//             <button onClick={() => handleChange(item, -1)}> - </button>
//             {/* <h1>welcome</h1> */}
//         </div>
//     )
// }

function ItemCounter(props) {
    const [cart, setCart] = useState([])
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

    const {item, count} = props;
    return (
        <div>
            <button onClick={() => handleChange(item,  1)}> + </button>
            <button>{count}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
        </div>
    )
}

export default ItemCounter