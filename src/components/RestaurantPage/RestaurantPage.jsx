import React from 'react';
import {RestaurantTeaser} from "../RestaurantTeaser/RestaurantTeaser";
import {RestaurantMenu} from "../RestaurantMenu/RestaurantMenu";
import {MenuType} from "../MenuType/MenuType";


export function RestaurantPage() {
    return (
        <main>
            <RestaurantTeaser />
            <RestaurantMenu />
            <MenuType />
        </main>
    );
}