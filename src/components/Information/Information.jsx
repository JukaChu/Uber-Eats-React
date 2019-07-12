import React from "react";
import "./Information.css";
import { data } from "../data/data";

export function Information() {
  return (
    <>
      <p className="information__restaurant-name">{data.title}</p>
      <div className="information__delivery">
        <p className="information__delivery__currency">
          {data.priceBucket} •{" "}
          {data.categories.map(({name}) => name)}
        </p>
        <div className="information__delivery__time">
          <p>
            {data.etaRange.min} - {data.etaRange.max} Min
          </p>
        </div>
      </div>
    </>
  );
}
