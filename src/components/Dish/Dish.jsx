import React from 'react';
import './Dish.css';

export function Dish(props) {
    const {title, itemDescription, price, imageUrl} = props.dish;
    let prices = price / 100;

    return (
        <div className="dishes__dish">
            <a href="javascript:void(0)" className="dish__basket">
                <div className="dish__description">
                    <p className="description__name">{title}</p>
                    {itemDescription !== undefined ? <p className="description__additive">{itemDescription}</p> : null}
                    <p className="description__price">${prices} ₴</p>
                </div>
                {imageUrl !== undefined ? <img src={imageUrl} alt="" className="dish__photo-preview"/> : null}
            </a>
        </div>
    )
}