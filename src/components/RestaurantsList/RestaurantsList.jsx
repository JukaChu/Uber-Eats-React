import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import {SearchPanel} from "../SearchPanel/SearchPanel";
import {RestaurantCard} from "../RestaurantCard/RestaurantCard";
import './RestaurantsList.css';
import {RestaurantsData} from "../data/RestaurantsData"
import img from './rest-img.png'
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
            <div className="restaurants-list-wrapper">
                <SearchPanel/>
                <p className="restaurants-list__title">Kyiv restaurants</p>
                {/*<Link to='/restaurant'>*/}
                <div className="restaurants-list__restaurant-card">
                    {RestaurantsData.map((restaurant, i) => { return <RestaurantCard key={i} url={restaurant.imageUrl} name={restaurant.title} price={restaurant.priceBucket} categories={restaurant.categories.map((category) => {return ` •  ${category.name}`})} deliveryTime={`${restaurant.etaRange.min}-${restaurant.etaRange.max} Min`}/>

                    })}
                </div>
                {/*</Link>*/}
            </div>
        </div>
    )

}