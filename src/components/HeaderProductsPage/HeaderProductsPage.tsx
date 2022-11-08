import React from "react";

import './HeaderProductsPage.css';

export const HeaderProductsPage = () => (
    <div className="app__products-header">
        <div className="app__products-header_img_wrapper">
            <img src={require('../../assets/logo.png')} alt="logo"/>
        </div>
        <h1>Manage Your Products App</h1>
    </div>
);