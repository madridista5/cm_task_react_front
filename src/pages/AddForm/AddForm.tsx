import React, {SyntheticEvent, useState} from "react";
import {HeaderProductsPage} from "../../components/HeaderProductsPage/HeaderProductsPage";
import {NavbarProductsPage} from "../../components/NavbarProductsPage/NavbarProductsPage";
import {FooterProductsPage} from "../../components/FooterProductsPage/FooterProductsPage";
import { ProductEntity } from "types";
import {apiUrl} from "../../config/api";
import { useNavigate } from "react-router-dom";

import './AddForm.css';

export const AddForm = () => {
    const [product, setProduct] = useState<ProductEntity>({
        name: '',
        price: 1,
    });
    const navigate = useNavigate();

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        const {name, price} = product;
        if(!name || !price || price < 0 || price > 99999.99) {
            return;
        }

        (async () => {
            const res = await fetch(`${apiUrl}/product/add`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    price,
                }),
            });

            if(res.status === 201) {
                navigate('/info', {
                    state: {
                        data: `Przedmiot "${name}" został dodany.`,
                    },
                });
            } else {
                navigate('/info', {
                    state: {
                        data: 'Wystąpił błąd, spróbuj ponownie za kilka minut.',
                    },
                });
            }
        })();
    };

    return (
        <div>
            <HeaderProductsPage/>
            <NavbarProductsPage/>

            <div className="app__add-form section__padding">
                <div className="app__add-form_wrapper">
                    <h1>Dodaj produkt</h1>
                    <form onSubmit={handleForm}>
                        {product.name.length > 100 &&
                        <p style={{color: 'red'}}>Nazwa produktu nie może mieć więcej niż 100 znaków</p>}
                        <input
                            type="text"
                            placeholder="Nazwa produktu"
                            onChange={e => setProduct({
                                ...product,
                                name: e.target.value,
                            })}
                            value={product.name}
                            required={true}
                        />
                        <p>Cena produktu:</p>
                        {(product.price <= 0 || product.price > 99999.99) &&
                            <p style={{color: 'red'}}>Cena produktu musi mieścić się w przedziale od 0 do 99999.99 zł</p>}
                        <input
                            type="number"
                            onChange={e => setProduct({
                                ...product,
                                price: Number(e.target.value),
                            })}
                            value={product.price}
                            required={true}
                        />
                        <button type="submit">Dodaj</button>
                    </form>
                </div>
            </div>

            <FooterProductsPage/>
        </div>
    )
}