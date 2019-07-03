import React from 'react';
import './Dish.css';

export function Dish(props) {
    const {title, itemDescription, price, imageUrl} = props.dish;
    let prices = price / 100;

    return (
        <div className="dish">
            <a href="javascript:void(0)" className="dish__basket">
                <div className="dish__description">
                    <p className="dish__description-name">{title}</p>
                    {itemDescription !== undefined ? <p className="dish__description-additive">{itemDescription}</p> : null}
                    <p className="dish__description-price">${prices} ₴</p>
                </div>
                {imageUrl !== undefined ? <img src={imageUrl} alt="" className="dish__photo-preview"/> : null}
            </a>
        </div>
    )
}