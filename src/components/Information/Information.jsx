import React from 'react';
import './Information.css';
import {data} from '../data/data';


export function Information() {
    return (
        <>
            <p className="information-restaurant-name">{data.title}</p>
            <div className="information-delivery">
                <p className="information-delivery-currency">{data.priceBucket} • {data.categories.map((category) => {
                    return `${category.name}`
                })}</p>
                <div className="information-delivery-time">
                    <p>{data.etaRange.min} - {data.etaRange.max} Min</p>
                </div>
            </div>
        </>
    )
}
