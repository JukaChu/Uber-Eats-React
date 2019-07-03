import React from 'react';
import './RestaurantTeaser.css';
import {data} from '../data/data';
import {Information} from "../Information/Information";
import '../Information/Information.css';


export function RestaurantTeaser() {
    return (
        <div className="restaurant-teaser">
            <div className="restaurant-teaser__background">
                <img src={data.largeImageUrl} className="restaurant-teaser__background-image" alt=""/>
            </div>
            <div className="restaurant-teaser__wrapper">
                <div className="restaurant-teaser__information">
                    <Information/>
                </div>
            </div>
        </div>
    )
}