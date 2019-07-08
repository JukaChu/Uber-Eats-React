import React from "react";
import logo from "./logo-footer.svg";
import "./Footer.css";
import { Container } from "../Container/Container";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__fixed">
          <a href="javascript:void(0)">
            <img src={logo} alt="" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
