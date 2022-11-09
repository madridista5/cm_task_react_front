import React from "react";
import {Link} from "react-router-dom";

import './NavbarProductsPage.css';

export const NavbarProductsPage = () => (
    <nav className="app__products-navbar">
        <ul className="app__products-ul">
            <li><Link to="/">Strona główna</Link></li>
            <li><Link to="/products">Lista produktów</Link></li>
            <li><Link to="/products/add">Dodaj produkt</Link></li>
        </ul>
    </nav>
)