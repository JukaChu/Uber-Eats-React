import React, {useEffect, useState} from "react";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import "./RestaurantsList.css";
import {Loader} from "../Loader/Loader";

export function RestaurantsList(props) {
  const [RestaurantsData, setRestaurantsData] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedRestaurants = await fetch('https://uber-eats-mates.herokuapp.com/api/v1/restaurants');
      const loadedRestaurants = await fetchedRestaurants.json();

      await setRestaurantsData(loadedRestaurants);

    })();
  });

  let filtred = RestaurantsData.filter(
      restaurant =>
          restaurant.title.toLowerCase().includes(props.searchValue) ||
          (restaurant.tags && props.filterTags(restaurant)) ||
          (restaurant.categories && props.filterCategories(restaurant))
  );

  function onRestaurantClick() {

  }

  return (
    <div className="restaurants-list">
      {filtred.length > 0 ? filtred.map((restaurant) => {
        return (
          <RestaurantCard
            key={restaurant.uuid}
            uuid={restaurant.uuid}
            url={restaurant.imageUrl}
            name={restaurant.title}
            onRestaurantClick={onRestaurantClick}
            price={restaurant.priceBucket}
            categories={restaurant.categories.map(category => {
              return ` •  ${category.name}`;
            })}
            deliveryTime={`${restaurant.etaRange.min}-${restaurant.etaRange.max} Min`}
          />
        );
      }) : <Loader/>}
    </div>
  );
}
