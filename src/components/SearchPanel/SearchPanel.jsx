import React from 'react';
import './SearchPanel.css';

export function SearchPanel() {
    return (
        <label className="search-panel__label">
            <input type="text" className="search-panel__input" placeholder="Search for restaurant or cuisine"/>
        </label>
    )
};