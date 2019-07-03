import React from "react";
import "./MainPage.css";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { SearchPanel } from "../SearchPanel/SearchPanel";

export function MainPage() {
  return (
    <>
      <main className="main-page">
        <div className="main-page__wrapper">
          <SearchPanel />
          <p className="main-page__title">Kyiv restaurants</p>
          <RestaurantsList />
        </div>
      </main>
    </>
  );
}
