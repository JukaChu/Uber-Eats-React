import React from 'react';
import basket from "../../img/basket.svg";
// import './cabinet.css';

export function Cabinet() {
    return (
        <div className="header__cabinet">
            <button className="cabinet__signIn">Sign In</button>
            <button className="cabinet__register">Register</button>
            <a href="" className="cabinet__basket">
                <img src={basket} alt="" className="basket__image"/>
            </a>
        </div>
    )
}