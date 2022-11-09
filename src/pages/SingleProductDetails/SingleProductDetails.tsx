import React from "react";
import {HeaderProductsPage} from "../../components/HeaderProductsPage/HeaderProductsPage";
import {NavbarProductsPage} from "../../components/NavbarProductsPage/NavbarProductsPage";
import {FooterProductsPage} from "../../components/FooterProductsPage/FooterProductsPage";
import {useLocation} from "react-router-dom";

import './SingleProductDetails.css';

interface StateLocation {
    id: string | undefined,
    name: string,
    price: number,
    updateDate: Date | null,
}

export const SingleProductDetails = () => {
    const location = useLocation();
    const myState = location.state as StateLocation;

    return(
        <div>
            <HeaderProductsPage/>
            <NavbarProductsPage/>

            <div className="app__product_detail section__padding">
                <div className="app__product_detail-info">
                    <h1>Szczegóły</h1>
                    <p>ID produktu: {myState.id}</p>
                    <p>Nazwa produtku: {myState.name}</p>
                    <p>Cena produktu: {myState.price} zł</p>
                    <p>Data aktualizacji: {
                        String(myState.updateDate).split('T')[0] === 'null'
                            ? 'brak'
                            : String(myState.updateDate).split('T')[0]
                    }</p>
                </div>
            </div>
            <FooterProductsPage/>
        </div>
    );
}