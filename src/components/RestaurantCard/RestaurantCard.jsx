import React from 'react';
import {BrowserRouter as  Link} from 'react-router-dom';
import './RestaurantCard.css';

export function RestaurantCard(props) {
    return (
        <div className="restaurant-card">
            <Link to="/restaurant" className="restaurant-card-link">
            {/*<a href="/restaurant" className="restaurant-card-link">*/}
                <img src={props.url} className="restaurant-card__photo"/>
                <div className="restaurant-card__preview">
                    <p className="restaurant-card__name">{props.name}</p>
                    <p className="restaurant-card__price">{props.price}</p>
                    <p className="restaurant-card__delivery-time">{props.deliveryTime}</p>
                </div>
            {/*</a>*/}
            </Link>
        </div>
    )
}