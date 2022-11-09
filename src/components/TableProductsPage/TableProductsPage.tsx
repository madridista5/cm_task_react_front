import React, {useEffect, useState} from "react";
import {AllProductsResponse} from 'types';
import {axiosData} from "../../utils/axiosData";
import {Spinner} from "../Spinner/Spinner";

import './TableProductsPage.css';

export const TableProductsPage = () => {
    const [products, setProducts] = useState<AllProductsResponse>([]);

    useEffect(() => {
        (async () => {
            const response = await axiosData.get('/product/allProducts');
            const data: AllProductsResponse = response.data;
            setProducts(data);
        })();
    }, []);

    return (
        <div className="app__products-table section__padding">
            {products.length === 0
                ? <Spinner/>
                : <table className="app__products-table_table">
                    <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Opcja</th>
                        <th>Opcja</th>
                        <th>Opcja</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map(product => <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>Szczegóły</td>
                        <td>Edytuj</td>
                        <td>Usuń</td>
                    </tr>)}
                    </tbody>
                </table>}
        </div>
    )
}