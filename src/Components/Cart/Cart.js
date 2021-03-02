import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price;
        
    // }

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items ordered: {cart.length}</h5>
            <p>items: {totalPrice}</p>
        </div>
    );
};

export default Cart;