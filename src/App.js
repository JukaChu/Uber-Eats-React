import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./components/MainPage/MainPage.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { MainPage } from "./components/MainPage/MainPage";
import { RestaurantTeaser } from "./components/RestaurantTeaser/RestaurantTeaser";
import { RestaurantMenu } from "./components/RestaurantMenu/RestaurantMenu";
import "./components/MenuType/MenuType.css";
import { MenuType } from "./components/MenuType/MenuType";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function RestaurantPage() {
  return (
    <>
      <main>
        <RestaurantTeaser />
        <RestaurantMenu />
        <MenuType />
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Router>
        <ScrollToTop>
          <Route path="/" exact component={MainPage} />
          <Route path="/restaurant" component={RestaurantPage} />
        </ScrollToTop>
      </Router>
      <Footer />
    </>
  );
}

export default App;
