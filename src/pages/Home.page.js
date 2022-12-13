import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomeMain from "../components/Main/HomeMain";

function HomePage(){
    return(
        <>
        <Header></Header>
        <HomeMain></HomeMain>
        <Footer></Footer>
        </>
    );
}

export default HomePage;