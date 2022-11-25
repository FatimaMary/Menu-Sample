import React from 'react'

const ItemCounter = ({count, handleChange, item}) => {
            
    return (
        <div>
            <button onClick={() => handleChange(item,  1)}> + </button>
            <button>{count}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
            {/* <h1>welcome</h1> */}
        </div>
    )
}

// function ItemCounter(props) {

//     return (
//         <div>
//             <button onClick={() => this.handleChange(props.item,  1)}> + </button>
//             <button>{props.amount}</button>
//             <button onClick={() => this.handleChange(props.item, -1)}> - </button>
//             {/* <h1>welcome</h1> */}
//         </div>
//     )
// }

export default ItemCounter