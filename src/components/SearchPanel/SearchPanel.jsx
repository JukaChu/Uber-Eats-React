import React from "react";
import "./SearchPanel.css";

export function SearchPanel(props) {
  function inputHandler(event) {
    console.log(event.target.value);
    props.onInputChange(event.target.value.toLowerCase());
  }

  return (
    <label className="search-panel__label">
      <input
        type="text"
        className="search-panel__input"
        placeholder="Search for restaurant or cuisine"
        onInput={inputHandler}
      />
    </label>
  );
}
