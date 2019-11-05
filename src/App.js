import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import "./components/MainPage/MainPage.css";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainPage} from "./components/MainPage/MainPage";
import "./components/MenuType/MenuType.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {RestaurantPage} from "./components/RestaurantPage/RestaurantPage";
import {ProviderBasket} from "./components/ContextBasket/ContextBasket";



class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            uuid:[]
        };
    }

    basket = [];

    renderRestaurantPage = props => {
        return (
            <RestaurantPage
                    match = {props.match}
            />
        );
    };
  render()  {
    return (
        <>
            <ProviderBasket value={this.basket}>
                <Header/>
                <Router>
                    <ScrollToTop>
                        <Route path="/" exact component={MainPage}/>
                        <Route path='/restaurant/:id' component={this.renderRestaurantPage}/>
                    </ScrollToTop>
                </Router>
                <Footer/>
            </ProviderBasket>
        </>
    );}
}

export default App;
