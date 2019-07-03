import React from 'react';
import logo from './logo-footer.svg';
import './Footer.css';

export function Footer() {

    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__fixed">
                    <a href="javascript:void(0)">
                        <img src={logo} alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    )

}