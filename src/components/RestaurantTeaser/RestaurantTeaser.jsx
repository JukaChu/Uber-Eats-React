import React from 'react';
import './RestaurantTeaser.css';
import {data} from '../data/data';


export function RestaurantTeaser() {
    return (
        <div className="restaurant-teaser">
            <div className="restaurant-teaser__background">
                <img src={data.largeImageUrl} className="restaurant-teaser__background-image" alt=""/>
            </div>
            <div className="restaurant-teaser__wrapper">
                <div className="restaurant-teaser__information">
                    <p className="information__restaurant-name">{data.title}</p>
                    <div className="information__delivery">
                        <p className="delivery-currency">{data.priceBucket} • {data.categories.map((category) => {
                            return `${category.name}`
                        })}</p>
                        <div className="delivery-time">
                            <p>{data.etaRange.min} - {data.etaRange.max} Min</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}