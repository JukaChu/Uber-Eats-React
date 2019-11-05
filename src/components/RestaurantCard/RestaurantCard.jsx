import React  from "react";
import { Link } from "react-router-dom";
import "./RestaurantCard.css";


export function RestaurantCard(props) {
  function onPageClick(){
    return console.log(props.uuid)
  }

  return (
    <div className="restaurant-card" onClick={() => onPageClick}>
      <Link to={`/restaurant/${props.uuid}`} className="restaurant-card__link">
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
