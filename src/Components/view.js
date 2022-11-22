import React from "react";
import './view.css';

const View = ({setShow}) => {
    return (
        <div className="cart" onClick={()=>setShow(false)}>
            <div>View Cart</div>
        </div>
    )
}

export default View