import React from 'react';
import logo from '../../img/logo-header.svg';

import {Cabinet} from "../cabinet/Cabinet";
import {Location} from "../location/Location";


export function Header() {
    return (
        <header id="header">
            <div className="wrapper-header">
                <div className="header">
                    <a href="javascript:void(0)">
                        <img src={logo} alt=""/>
                    </a>
                    <Location/>
                    <Cabinet/>
                </div>
            </div>
        </header>
    )
}