import React from "react";
import { Link } from "react-router-dom";

import './BtnOpenApp.css';

export const BtnOpenApp = () => (
    <Link to="/products">
        <button type="button" className="app__welcome-btn">Otwórz aplikację</button>
    </Link>
);