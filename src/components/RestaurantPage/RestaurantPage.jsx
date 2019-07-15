import React from 'react';
import {RestaurantTeaser} from "../RestaurantTeaser/RestaurantTeaser";
import {RestaurantMenu} from "../RestaurantMenu/RestaurantMenu";
import {MenuType} from "../MenuType/MenuType";


export function RestaurantPage(props) {
    return (
        <main>
            <RestaurantTeaser />
            <RestaurantMenu />
            <MenuType/>
        </main>
    );
}