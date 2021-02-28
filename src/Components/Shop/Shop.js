import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    return (
        <div class="shop-container">
            <div class="product-container">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div class="cart-container">
                <h3>This is from cart container</h3>
            </div>
        </div >
    );
};

export default Shop;