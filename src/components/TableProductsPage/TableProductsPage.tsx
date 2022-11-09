import React, {useEffect, useState} from "react";
import {AllProductsResponse} from 'types';
import {axiosData} from "../../utils/axiosData";
import {Spinner} from "../Spinner/Spinner";
import {useNavigate} from "react-router-dom";

import './TableProductsPage.css';

export const TableProductsPage = () => {
    const [products, setProducts] = useState<AllProductsResponse>([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const response = await axiosData.get('/product/allProducts');
            const data: AllProductsResponse = response.data;
            setProducts(data);
        })();
    }, []);

    const handleEdit = (id: string | undefined) => {
        navigate('/edit', {
            state: {
                data: id,
            },
        });
    };

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
                        <td onClick={() => handleEdit(product.id)}>Edytuj</td>
                        <td>Usuń</td>
                    </tr>)}
                    </tbody>
                </table>}
        </div>
    )
}