import React from 'react';
import ReactDOM from 'react-dom';
import './components/main-page/main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RestaurantList} from "./components/restaurant-list/restaurant-list";

ReactDOM.render(<App />, document.querySelector('body'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

[...document.querySelectorAll('.restaurant-card-link')].forEach((link) => {
    link.addEventListener('click', () => {
        ReactDOM.render(<RestaurantList/>, document.querySelector('body'))
    });
});