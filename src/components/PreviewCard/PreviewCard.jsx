import React from "react";
import "./PreviewCard.css";
import { data } from "../data/data";

export function PreviewCard() {
  return (
    <>
      <p className="preview-card__restaurant-name">{data.title}</p>
      <div className="preview-card__delivery">
        <p className="preview-card__delivery__currency">
          {data.priceBucket} •{" "}
          {data.categories.map(({name}) => name)}
        </p>
        <div className="preview-card__delivery__time">
          <p>
            {data.etaRange.min} - {data.etaRange.max} Min
          </p>
        </div>
      </div>
    </>
  );
}
