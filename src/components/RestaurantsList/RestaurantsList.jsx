import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import {SearchPanel} from "../search-panel/search-panel";
import {RestaurantCard} from "../RestaurantCard/RestaurantCard";
import './RestaurantsList.css';
import img from './rest-img.png'
export function RestaurantsList() {
    const restaurants = [
        {
            name: 'McDonalds',
            price: '₴₴ • Бургеры',
            deliveryTime: '25-35 Min',
            url: img,
        },
        {
            name: 'KFC',
            price: '₴₴ • Курочка',
            deliveryTime: '5-15 Min',
            url: img,
        },
        {
            name: 'Fashion Shaurma',
            price: '₴₴ • Шаурма',
            deliveryTime: '15-25 Min',
            url: img,
        },

    ];

    return (
        <div className="restaurants-list">
            <div className="restaurants-list-wrapper">
                <SearchPanel/>
                <p className="restaurants-list__title">Kyiv restaurants</p>
                <Link to='/restaurant'>
                <div className="restaurants-list__restaurant-card">
                    {restaurants.map((restaurant, i) => { return <RestaurantCard key={i} url={restaurant.url} name={restaurant.name} price={restaurant.price} deliveryTime={restaurant.deliveryTime}/>

                    })}
                </div>
                </Link>
            </div>
        </div>
    )

}