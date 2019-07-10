import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./RestaurantCard.css";

export function RestaurantCard(props) {
  return (
    <div className="restaurant-card">
      <Link to="/restaurant" className="restaurant-card__link">
        <img src={props.url} className="restaurant-card__photo" alt={props.name} />
        <div className="restaurant-card__preview">
          <p className="restaurant-card__name">{props.name}</p>
          <p className="restaurant-card__price">
            {props.price}
            {props.categories}
          </p>
          <p className="restaurant-card__delivery-time">{props.deliveryTime}</p>
        </div>
      </Link>
    </div>
  );
}
