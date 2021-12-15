import React, {useState, useContext} from 'react';
import "./item.css";
import QuantityPicker from "./quantityPicker";
import storeContext from "../context/storeContext";


const Item = (props) => {

    const [quantity, setQuantity] = useState(1);
    const addProductToCart = useContext(storeContext).addProductToCart;

    const quantityChange = (val) => {
        console.log("Quantity has Changed", val);

        setQuantity(val);
    };

    const getTotal = () => {
        let total =  quantity * props.data.price;
        return total.toFixed(2);
    };

    const handleAdd = () => {
        let prodForCart = { 
            ...props.data, 
            quantity: quantity,
        };
        addProductToCart(prodForCart);
        console.log(prodForCart);

    };

    return (
        <div className="item">
            {props.data.category}
            <img src={"/images/" + props.data.image} alt="product" />
            <h5>{props.data.title || "no title"}</h5>

            <label className="total">${getTotal()}</label>
            <label className="price">${props.data.price.toFixed(2)} each</label>

            <div className="controls">
            <QuantityPicker onQuantityChange={quantityChange}></QuantityPicker>
            <button onClick={handleAdd} className="btn btn-sm btn-dark btn-add">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
            </div>
        </div>

        
    );
};

export default Item;