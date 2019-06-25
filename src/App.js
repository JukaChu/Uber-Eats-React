import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './components/MainPage/main.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainPage} from "./components/MainPage/MainPage";

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
