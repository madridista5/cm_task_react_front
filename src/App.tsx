import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Welcome} from "./pages/Welcome/Welcome";
import {Products} from "./pages/Products/Products";
import {Info} from "./pages/Info/Info";
import {AddForm} from "./pages/AddForm/AddForm";
import {EditForm} from "./pages/EditForm/EditForm";
import {SingleProductDetails} from "./pages/SingleProductDetails/SingleProductDetails";

import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/products/add" element={<AddForm/>}/>
                <Route path="/edit" element={<EditForm/>}/>
                <Route path="/product/details" element={<SingleProductDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}