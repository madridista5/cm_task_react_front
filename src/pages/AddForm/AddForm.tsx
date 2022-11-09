import React from "react";
import {HeaderProductsPage} from "../../components/HeaderProductsPage/HeaderProductsPage";
import {NavbarProductsPage} from "../../components/NavbarProductsPage/NavbarProductsPage";
import {FooterProductsPage} from "../../components/FooterProductsPage/FooterProductsPage";

import './AddForm.css';

export const AddForm = () => {
    return (
        <div className="app__add-form">
            <HeaderProductsPage/>
            <NavbarProductsPage/>
            <FooterProductsPage/>
        </div>
    )
}