import React, { useContext } from "react";
import storeContext from "../context/storeContext";
import "./cartItem.css"



const CartItem = (props) => {

    const removeProductFromCart = useContext(storeContext).removeProductFromCart;

    const getTotal = () => {
        let total = props.info.price * props.info.quantity;
        return total.toFixed(2);
    };

    const deleteProd = () => {
        removeProductFromCart(props.info._id);
    };

    return (
    <div className="cart-item">
        <img className="image" src={"/images/" + props.info.image} alt="product"></img>
        <div className="info">
            <h4 className="title">{props.info.title}</h4>
            <label className="category">{props.info.category}</label>
        </div>
        <label className="price">Price: ${props.info.price.toFixed(2)}</label>

        <label className="quantity">Quantity: #{props.info.quantity}</label>

        <label className="total">Total: ${getTotal()}</label>

        <button className="btn btn-sm btn-danger" onClick={deleteProd}>Delete</button>
    </div>
    );
};

export default CartItem;
