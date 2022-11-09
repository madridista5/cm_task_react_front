import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Welcome} from "./pages/Welcome/Welcome";
import {Products} from "./pages/Products/Products";
import {Info} from "./pages/Info/Info";
import {AddForm} from "./pages/AddForm/AddForm";

import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/products/add" element={<AddForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}