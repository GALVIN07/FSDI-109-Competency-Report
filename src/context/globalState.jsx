import React, {useState} from 'react';
import storeContext from './storeContext';

const GlobalState = (props) => {
    const [myCart, setMyCart] = useState([]);
    const [myLoggedInUser, setMyLoggedInUser] = useState({});

    const addProductToMyCart = (product) => {
        let copy = [...myCart];
        let alreadyInCart = false;
        for (let i = 0; i < copy.length; i++ ) {
            let item = copy[i];
            
            if(product._id === item._id) {
                alreadyInCart=true;

                item.quantity = item.quantity + product.quantity;

            }
        }

        if (!alreadyInCart){
            copy.push(product);
        }

        setMyCart(copy);
    };
    const removeProductFromMyCart = (productId) => {
        let copy = [...myCart];
        for (let i = 0; i < copy.length; i++) {
            let item = copy[i];
            if(item._id === productId) {
                copy.splice(i, 1);
            }
        }
        
        setMyCart(copy);
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