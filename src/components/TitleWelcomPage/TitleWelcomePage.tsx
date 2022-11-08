import React from "react";
import { TypeAnimation } from 'react-type-animation';

import './TitleWelcomePage.css';

export const TitleWelcomePage = () => {
    return(
        <div className="app__welcome-title">
            <h1><TypeAnimation sequence={['Coffee Mug - zadanie rekrutacyjne', 'Manage Your Products App']} speed={1}/></h1>
            <p className="app__welcome-title_info">Z aplikacją "Mange Your Products" zarządzanie Twoimi produktami stanie się łatwe i przyjemne :) W każdej chwili będziesz mógł zobaczyć aktualną listę swoich produktów. Masz również możliwość dodawania, usuwania oraz aktualizowania produktów. Zapraszamy do korzystania z aplikacji :)</p>
        </div>
    )
}