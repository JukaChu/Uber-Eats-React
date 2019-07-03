import React from 'react';
import basket from "../../img/basket.svg";
// import './cabinet.css';

export function Cabinet() {
    return (
        <div className="cabinet">
            <button className="cabinet__signIn">Sign In</button>
            <button className="cabinet__register">Register</button>
            <a href="" className="cabinet__basket-link">
                <img src={basket} alt="" className="cabinet__basket-image"/>
            </a>
        </div>
    )
}