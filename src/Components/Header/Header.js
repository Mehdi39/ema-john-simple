import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div class="Header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Oder">Order Review</a>
                <a href="/Manage">Manage Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;