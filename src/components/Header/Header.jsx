import React from "react";
import logo from "../../img/logo-header.svg";
import "./Header.css";

import {Cabinet} from "../Cabinet/Cabinet";
import {Location} from "../Location/Location";
import {Container} from "../Container/Container";
import ConsumerBasket from '../ContextBasket/ContextBasket';

export function Header(props) {
    return (
        <ConsumerBasket>
            {context => {
                return (
            <header className="header">
                <Container>
                    <div className="header__fixed">
                        <a href="/">
                            <p>{context}</p>
                            <img src={logo} alt=""/>
                        </a>
                        <Location/>
                        <Cabinet/>
                    </div>
                </Container>
            </header>
                )}}
        </ConsumerBasket>
    );
}
