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
                            <img src={logo} alt=""/>
                        </a>
                        <Cabinet context={context}/>
                    </div>
                </Container>
            </header>
                )}}
        </ConsumerBasket>
    );
}
