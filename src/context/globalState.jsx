import React, {useState} from 'react';
import storeContext from './storeContext';

const GlobalState = (props) => {
    const [myCart, setMyCart] = useState([]);
    const [myLoggedInUser, setMyLoggedInUser] = useState({});

    const addProductToMyCart = (product) => {
        let copy = [...myCart];

        copy.push(product);

        setMyCart(copy);
    };
    const removeProductFromMyCart = (productID) => {
        console.log("Removed Item", productID);
    };

    return (
        <storeContext.Provider value={{
            cart: myCart,
            user: myLoggedInUser,
            addProductToCart: addProductToMyCart,
            removeProductFromCart: removeProductFromMyCart,

        }}>
            {props.children}
        </storeContext.Provider>

    );
};

export default GlobalState;