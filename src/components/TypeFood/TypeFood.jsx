import React from "react";
import "./TypeFood.css";
//понять что и как
import scrollSpy from "simple-scrollspy";

window.onload = function() {
  scrollSpy(".restaurant-menu__type", {
    offset: 0, // in pixels

    menuActiveTarget: "li > a",

    sectionClass: ".menu-type__section-menu",

    activeClass: "type-food--active"
  });
};

export function TypeFood(props) {
  return (
    <li>
      <a href={props.anchor} className="type-food">
        {props.type}
      </a>
    </li>
  );
}
