import React, {useState} from "react";
import "./MenuType.css";
import { Dish } from "../Dish/Dish";
import ConsumerBasket from "../ContextBasket/ContextBasket";

export function MenuType(props) {
    const [restaurant, setRestaurant] = useState(props.restaurant);

  return (
    <div className="menu-type">
      <div className="menu-type__wrapper">
        {restaurant.sections.map(section => {
          return (
            <div className="menu-type__section-menu">
              <h4 className="menu-type__name" id={section.title}>
                {section.title}
              </h4>
              <div className="menu-type__dish">
                {section.itemUuids.map((item, key) => {
                    let itemInfo = {
                        key: restaurant.items[item].title,
                        amount: 0,
                        name: restaurant.items[item].title,
                    };
                  return (
                      <ConsumerBasket>
                          {context => {

                              return (
                      <Dish key={item} context={context}
                                dish={restaurant.items[item]}
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
