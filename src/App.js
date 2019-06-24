import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './components/main-page/main.css';
import {Header} from "./components/header/Header";
import {RestaurantList} from "./components/restaurant-list/restaurant-list";
import {Footer} from "./components/footer/footer";
import {MainPage} from "./components/main-page/main-page";

function RestaurantPage () {
    return <h1>Hiiiii</h1>
}

function App() {

    return (
        <>
            <Header/>
            <Router>
                <Route path='/'
                       exact
                       component={MainPage}/>
                <Route path='/restaurant'
                       component={RestaurantPage}/>
            </Router>
            <Footer/>
        </>
    );
}

export default App;
