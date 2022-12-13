import React from "react";
import { Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage.js";
import ContactUs from "./pages/ContactUs.js";
import HomePage from "./pages/Home.page.js";
import ProductPage from "./pages/ProductPage.js";

function App() {
  return (
    <React.Fragment>
      <Route path="/product">
        <ProductPage></ProductPage>
      </Route>
      <Route path="/about">
        <AboutPage></AboutPage>
      </Route>
      <Route path="/home">
        <HomePage></HomePage>
      </Route>
      <Route path="/contactUs">
        <ContactUs></ContactUs>
      </Route>
    </React.Fragment>
  );
}

export default App;
