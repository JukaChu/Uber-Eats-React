import React from "react";
import './Location.css';

export function Location() {
  return (
    <div className="location">
      <button className="location__time">ASAP</button>
      <span className="location__to">to</span>
      <label className="location__place">
        <input
          type="text"
          className="location__place-input"
          placeholder="ul. Tarasivska, 16"
        />
      </label>
    </div>
  );
}
