import React from "react";
import {HeaderProductsPage} from "../../components/HeaderProductsPage/HeaderProductsPage";
import {NavbarProductsPage} from "../../components/NavbarProductsPage/NavbarProductsPage";
import {FooterProductsPage} from "../../components/FooterProductsPage/FooterProductsPage";
import {TableProductsPage} from "../../components/TableProductsPage/TableProductsPage";

export const Products = () => {
    return(
        <div className="app__products">
            <HeaderProductsPage/>
            <NavbarProductsPage/>
            <TableProductsPage/>
            <FooterProductsPage/>
        </div>
    );
}