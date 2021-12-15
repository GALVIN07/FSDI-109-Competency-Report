import React from 'react';

export default React.createContext({
    cart: [],
    users: {},

    addProductToCart: (product) => {},
    removeProductFromCart: (productId) => {},
        
});