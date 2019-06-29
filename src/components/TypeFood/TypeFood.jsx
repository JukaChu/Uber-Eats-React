import React from 'react';
import './TypeFood.css';

export function TypeFood(props) {
    return (
        <li><a href={props.anchor}
               className="type_food">{props.type}</a>
        </li>
    )
}