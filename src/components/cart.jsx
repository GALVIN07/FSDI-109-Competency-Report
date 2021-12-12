import "./cart.css";
import storeContext from "../context/storeContext";
import React, {useContext} from "react";




const Cart = () => {
    const cart = useContext(storeContext).cart;

    return (
        <div className="cart-page">
            <h1>Ready to Order</h1>
            <h4>You Have {Cart.length} products on the cart</h4>

            <div className="cart-content">
                {cart.map((prod)=>(
                    <div>{prod.title}</div>
                ))}
            </div>
        </div>
        
    );
};


export default Cart;