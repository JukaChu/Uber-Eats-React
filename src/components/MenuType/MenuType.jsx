import React from "react";
import { data } from "../data/data";
import "./MenuType.css";
import { Dish } from "../Dish/Dish";
import ConsumerBasket from "../ContextBasket/ContextBasket";

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
                {section.itemUuids.map((item) => {
                    let itemInfo = {
                        key: data.items[item].title,
                        amount: 0,
                        name: data.items[item].title,
                    };
                  return (
                      <ConsumerBasket>
                          {/*// узнать как передать сюда стейт или как сверху добавить context, попробовать через родителя пропсом*/}
                          {context => {

                              return (
                      <Dish key={item} context={context}
                                dish={data.items[item]}
                               itemIn ={itemInfo}
                              />)}}
                      </ConsumerBasket>)
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
