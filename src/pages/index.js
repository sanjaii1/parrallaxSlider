import React from "react";
import Header from "./components/header";
import Slider from "./components/slider";
import NextPart from "./components/nextPart";
import './style.css'

const HomePage = () => {
  return (
    <div className="homePageContainer container">
      <div className="homePageDiv">
        <Header />
        <Slider />
        <NextPart />
      </div>
    </div>
  
  );
};

export default HomePage;
