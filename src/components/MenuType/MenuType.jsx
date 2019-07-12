import React from "react";
import { data } from "../data/data";
import "./MenuType.css";
import { Dish } from "../Dish/Dish";

export function MenuType() {
  return (
    <div className="menu-type">
      <div className="menu-type__wrapper">
        {data.sections.map(section => {
          return (
            <div className="menu-type__section-menu">
              <h4 className="menu-type__name" id={section.title}>
                {section.title}
              </h4>
              <div className="menu-type__dish">
                {section.itemUuids.map((item, i) => {
                  return <Dish key={i} dish={data.items[item]} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
