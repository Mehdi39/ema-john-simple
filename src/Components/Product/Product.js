import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div class="Product">
            <div>
                <img src={img} alt="Logo"/>
            </div>
            <div>
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon!</small></p>
                <button class="add-to-cart-btn" onClick={() => props.eventAddToCart(props.product)} ><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;