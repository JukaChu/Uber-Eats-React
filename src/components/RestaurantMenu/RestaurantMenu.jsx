import React, {useState} from "react";
import "./RestaurantMenu.css";
import {data} from "../data/data";
import {TypeFood} from "../TypeFood/TypeFood";

export function RestaurantMenu(props) {
    const [restaurant, setRestaurant] = useState(props.restaurant);

    return (
        <nav className="restaurant-menu">
            <div className="restaurant-menu__wrapper">
                <ul className="restaurant-menu__type">
                    {restaurant.sections.map((section, i) => {
                        return (
                            <TypeFood
                                spy={true}
                                to={section.title}
                                key={i}
                                anchor={`#${section.title}`}
                                type={section.title}
                            />
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
