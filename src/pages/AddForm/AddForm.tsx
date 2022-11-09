import React from "react";
import {HeaderProductsPage} from "../../components/HeaderProductsPage/HeaderProductsPage";
import {NavbarProductsPage} from "../../components/NavbarProductsPage/NavbarProductsPage";
import {FooterProductsPage} from "../../components/FooterProductsPage/FooterProductsPage";

import './AddForm.css';

export const AddForm = () => {

    const handleForm = () => {

    };

    return (
        <div>
            <HeaderProductsPage/>
            <NavbarProductsPage/>

            <div className="app__add-form section__padding">
                <div className="app__add-form_wrapper">
                    <h1>Dodaj produkt</h1>
                    <form onSubmit={handleForm}>
                        <input type="text" placeholder="Nazwa produktu"/>
                        <p>Cena produktu:</p>
                        <input type="number"/>
                        <button type="submit">Dodaj</button>
                    </form>
                </div>
            </div>

            <FooterProductsPage/>
        </div>
    )
}