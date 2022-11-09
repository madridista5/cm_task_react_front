import React from "react";

import './FooterProductsPage.css';

export const FooterProductsPage = () => (
    <footer className="app__products-footer section__padding">
        <div className="app__products-footer-links">
            <div className="app__products-footer-links_contact">
                <h1 className="app__products-footer-headtext">Znajdź nas</h1>
                <p className="p__opensans"><i className="fab fa-facebook"></i> Facebook</p>
                <p className="p__opensans"><i className="fab fa-twitter-square"></i> Twitter</p>
                <p className="p__opensans"><i className="fab fa-instagram"></i> Instagram</p>
            </div>
            <div className="app__products-footer-links_contact">
                <h1 className="app__products-footer-headtext">Manage Your Products App</h1>
                <p className="p__opensans">Pomoc</p>
                <p className="p__opensans">Kontakt</p>
                <p className="p__opensans">Reklama</p>
            </div>
            <div className="app__products-footer-links_contact">
                <h1 className="app__products-footer-headtext">Informacje</h1>
                <p className="p__opensans">O aplikacji</p>
                <p className="p__opensans">O API</p>
                <p className="p__opensans">O nas</p>
            </div>
        </div>
        <div className="app__products-footer-copyright">
            <p className="p__opensans">2022 Manage Your Products App. All rights reserved.</p>
        </div>
    </footer>
);