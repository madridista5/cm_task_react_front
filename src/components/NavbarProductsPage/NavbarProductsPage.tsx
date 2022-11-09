import React from "react";

import './NavbarProductsPage.css';
import {Link} from "react-router-dom";

export const NavbarProductsPage = () => (
    <nav className="app__products-navbar">
        <ul className="app__products-ul">
            <li><Link to="/">Strona główna</Link></li>
            <li><Link to="/products">Lista produktów</Link></li>
            <li><Link to="/products/add">Dodaj produkt</Link></li>
        </ul>
    </nav>
)