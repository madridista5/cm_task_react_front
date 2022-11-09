import React, {useEffect, useState} from "react";
import {AllProductsResponse} from 'types';
import {axiosData} from "../../utils/axiosData";

import './TableProductsPage.css';
import {Spinner} from "../Spinner/Spinner";

export const TableProductsPage = () => {
    const [products, setProducts] = useState<AllProductsResponse>([]);

    useEffect(() => {
        (async () => {
            const response = await axiosData.get('/product/allProducts');
            const data: AllProductsResponse = response.data;
            setProducts(data);
        })();
    }, []);

    return(
        <div className="app__products-table section__padding">
            {products.length === 0
            ? <Spinner/>
            : <table></table>}
        </div>
    )
}