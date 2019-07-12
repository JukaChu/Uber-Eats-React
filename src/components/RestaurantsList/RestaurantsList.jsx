import React from "react";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import "./RestaurantsList.css";
import { RestaurantsData } from "../data/RestaurantsData";

export function RestaurantsList(props) {
  let filtred = RestaurantsData.filter(
      restaurant =>
          restaurant.title.toLowerCase().includes(props.searchValue) ||
          (restaurant.tags && props.filterTags(restaurant)) ||
          (restaurant.categories && props.filterCategories(restaurant))
  );


  return (
    <div className="restaurants-list">
      {filtred.length > 0 ? filtred.map((restaurant) => {
        return (
          <RestaurantCard
            key={restaurant.uuid}
            url={restaurant.imageUrl}
            name={restaurant.title}
            price={restaurant.priceBucket}
            categories={restaurant.categories.map(category => {
              return ` •  ${category.name}`;
            })}
            deliveryTime={`${restaurant.etaRange.min}-${restaurant.etaRange.max} Min`}
          />
        );
      }) : <h1>No restaurants</h1>}
    </div>
  );
}
