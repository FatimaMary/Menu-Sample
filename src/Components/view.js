import React from "react";
import Order from "./ordersummary";
import './view.css';

const View = ({setShow}) => {
    return (
        <div className="cart" onClick={()=>setShow(false)}>
            <div>View Cart</div>
            {/* <Order/> */}
        </div>
    )
}

export default View