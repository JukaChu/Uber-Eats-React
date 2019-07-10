import React from "react";
import "./Dish.css";

export function Dish(props) {
  const { title, itemDescription, price, imageUrl } = props.dish;
  let priceFixed = (price/100).toFixed(2);

  return (
    <div className="dish">
      <a href="javascript:void(0)" className="dish__basket">
        <div className="dish__description">
          <p className="dish__name">{title}</p>
          {itemDescription && (
            <p className="dish__additive">{itemDescription}</p>
          )}
          <p className="dish__price">{priceFixed}₴</p>
        </div>
        {imageUrl && (
          <img src={imageUrl} alt={title} className="dish__photo-preview" />
        )}
      </a>
    </div>
  );
}
