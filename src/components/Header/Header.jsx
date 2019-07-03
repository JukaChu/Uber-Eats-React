import React from "react";
import logo from "../../img/logo-header.svg";
import "./Header.css";

import { Cabinet } from "../Cabinet/Cabinet";
import { Location } from "../Location/Location";

export function Header() {
  return (
    <header id="header" className="header">
      <div className="header__wrapper">
        <div className="header__fixed">
          <a href="javascript:void(0)">
            <img src={logo} alt="" />
          </a>
          <Location />
          <Cabinet />
        </div>
      </div>
    </header>
  );
}
