import React from "react";
import logo from "../../img/logo-header.svg";
import "./Header.css";

import { Cabinet } from "../Cabinet/Cabinet";
import { Location } from "../Location/Location";
import { Container } from "../Container/Container";

export function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__fixed">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <Location />
          <Cabinet />
        </div>
      </Container>
    </header>
  );
}
