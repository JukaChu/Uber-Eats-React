import React from "react";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import "./RestaurantsList.css";
import { RestaurantsData } from "../data/RestaurantsData";

export function RestaurantsList(props) {
  return (
    <div className="restaurants-list">
      {RestaurantsData.filter(
        restaurant =>
          restaurant.title.toLowerCase().includes(props.searchValue) ||
          (restaurant.tags && props.filterTags(restaurant)) ||
          (restaurant.categories && props.filterCategories(restaurant))
      ).map((restaurant, i) => {
        return (
          <RestaurantCard
            key={i}
            url={restaurant.imageUrl}
            name={restaurant.title}
            price={restaurant.priceBucket}
            categories={restaurant.categories.map(category => {
              return ` •  ${category.name}`;
            })}
            deliveryTime={`${restaurant.etaRange.min}-${restaurant.etaRange.max} Min`}
          />
        );
      })}
    </div>
  );
}
