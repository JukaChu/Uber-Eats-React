import React, {useState, useEffect} from 'react';
import {RestaurantTeaser} from "../RestaurantTeaser/RestaurantTeaser";
import {RestaurantMenu} from "../RestaurantMenu/RestaurantMenu";
import {MenuType} from "../MenuType/MenuType";


export function RestaurantPage(props) {
    const [uuid, setUuid] = useState(props.match.params.id);
    const [restaurant, setRestaurant] = useState({});
    useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://uber-eats-mates.herokuapp.com/api/v1/restaurants/${uuid}`
            );
            const loadedRestaurant = await response.json();
            await setRestaurant(loadedRestaurant);
        })();
    });

    function isNotEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    return (
        <main>



            {isNotEmpty(restaurant) ? (
                <RestaurantTeaser
                    restaurant={restaurant}/>
            ) : (
                ""
            )}
            {isNotEmpty(restaurant) ? (
                <RestaurantMenu
                    restaurant={restaurant}/>
            ) : (
                ""
            )}
            {isNotEmpty(restaurant) ? (
                <MenuType
                    restaurant={restaurant}/>
            ) : (
                ""
            )}
        </main>
    );
}