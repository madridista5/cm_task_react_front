import React from "react";
import {HeaderProductsPage} from "../../components/HeaderProductsPage/HeaderProductsPage";
import {NavbarProductsPage} from "../../components/NavbarProductsPage/NavbarProductsPage";
import {FooterProductsPage} from "../../components/FooterProductsPage/FooterProductsPage";
import {useLocation} from "react-router-dom";

import './Info.css';

interface StateLocation {
    data: string,
}

export const Info = () => {
    const location = useLocation();
    const myState = location.state as StateLocation;

    return(
        <div>
            <HeaderProductsPage/>
            <NavbarProductsPage/>

            <div className="app__info section__padding">
                <div className="app__info-info">
                    {myState.data}
                </div>
            </div>

            <FooterProductsPage/>
        </div>
    );
}