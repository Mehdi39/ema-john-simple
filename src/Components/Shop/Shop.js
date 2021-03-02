import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const eventAddToCart = (pd) => {
        const newCart = [...cart, pd];
        setCart(newCart);
    };
    
    return (
        <div class="shop-container">
            <div class="product-container">
                {
                    products.map(product => <Product eventAddToCart={eventAddToCart} product={product}></Product>)
                }
            </div>
            <div class="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Shop;