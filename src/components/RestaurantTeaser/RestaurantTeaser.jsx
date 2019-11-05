import React, {useState} from "react";
import "./RestaurantTeaser.css";
import { data } from "../data/data";
import { PreviewCard } from "../PreviewCard/PreviewCard";
import "../PreviewCard/PreviewCard.css";

export function RestaurantTeaser(props) {
    const [data, setRestaurant] = useState(props.restaurant);
  return (
    <div className="restaurant-teaser">
      <div className="restaurant-teaser__background">
        <img
          src={props.restaurant.largeImageUrl}
          className="restaurant-teaser__background-image"
          alt={props.restaurant.title}
        />
      </div>
      <div className="restaurant-teaser__wrapper">
        <div className="restaurant-teaser__preview-card">
          <PreviewCard restaurant={data}/>
        </div>
      </div>
    </div>
  );
}
