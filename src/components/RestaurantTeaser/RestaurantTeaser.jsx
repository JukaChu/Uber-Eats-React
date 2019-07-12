import React from "react";
import "./RestaurantTeaser.css";
import { data } from "../data/data";
import { PreviewCard } from "../PreviewCard/PreviewCard";
import "../PreviewCard/PreviewCard.css";

export function RestaurantTeaser() {
  return (
    <div className="restaurant-teaser">
      <div className="restaurant-teaser__background">
        <img
          src={data.largeImageUrl}
          className="restaurant-teaser__background-image"
          alt={data.title}
        />
      </div>
      <div className="restaurant-teaser__wrapper">
        <div className="restaurant-teaser__preview-card">
          <PreviewCard />
        </div>
      </div>
    </div>
  );
}
