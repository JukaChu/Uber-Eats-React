import React from 'react';
import {RestaurantCard} from "../RestaurantCard/RestaurantCard";
import './RestaurantsList.css';
import {RestaurantsData} from "../data/RestaurantsData"

export function RestaurantsList() {
    // const restaurants = [
    //     {
    //         name: 'McDonalds',
    //         price: '₴₴ • Бургеры',
    //         deliveryTime: '25-35 Min',
    //         url: img,
    //     },
    //     {
    //         name: 'KFC',
    //         price: '₴₴ • Курочка',
    //         deliveryTime: '5-15 Min',
    //         url: img,
    //     },
    //     {
    //         name: 'Fashion Shaurma',
    //         price: '₴₴ • Шаурма',
    //         deliveryTime: '15-25 Min',
    //         url: img,
    //     },
    //
    // ];

    return (
        <div className="restaurants-list">
            {RestaurantsData.map((restaurant, i) => {
                return <RestaurantCard key={i} url={restaurant.imageUrl} name={restaurant.title}
                                       price={restaurant.priceBucket}
                                       categories={restaurant.categories.map((category) => {
                                           return ` •  ${category.name}`
                                       })}
                                       deliveryTime={`${restaurant.etaRange.min}-${restaurant.etaRange.max} Min`}/>

            })}
        </div>
    )
}