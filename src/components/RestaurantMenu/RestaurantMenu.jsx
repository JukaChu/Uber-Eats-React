import React from 'react';
import './RestaurantMenu.css';
import {data} from "../data/data";
import {TypeFood} from "../TypeFood/TypeFood";

export function RestaurantMenu() {
    return (
        <nav className="restaurant-menu">
            <div className="restaurant-menu__wrapper">
                <ul className="restaurant-menu__type">
                    {data.sections.map((section, i) => {
                        return <TypeFood key={i} anchor={`#${section.title}`} type={section.title} />
                    })}
                </ul>
            </div>
        </nav>
    )

}