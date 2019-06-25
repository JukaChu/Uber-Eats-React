import React from 'react';
import logo from './logo-footer.svg';
import './Footer.css';

export function Footer() {

    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer">
                    <a href="javascript:void(0)">
                        <img src={logo} alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    )

}