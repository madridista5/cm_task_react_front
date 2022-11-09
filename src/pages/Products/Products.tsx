import React from "react";
import {HeaderProductsPage} from "../../components/HeaderProductsPage/HeaderProductsPage";
import {NavbarProductsPage} from "../../components/NavbarProductsPage/NavbarProductsPage";

export const Products = () => {
    return(
        <div className="app__products">
            <HeaderProductsPage/>
            <NavbarProductsPage/>
        </div>
    );
}