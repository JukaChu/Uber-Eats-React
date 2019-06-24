import React from 'react';
import logo from './logo-footer.svg';

export function Footer() {

    return (
        <footer>
            <div className="wrapper-footer">
                <div className="footer">
                    <a href="javascript:void(0)">
                        <img src={logo} alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    )

}