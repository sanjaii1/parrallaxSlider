import React from "react";
import Header from "./components/header";
import Slider from "./components/slider";
import NextPart from "./components/nextPart";

const HomePage = () => {
  return (
    <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
    <div style={{width:'100%'}}>
      <Header />
      <Slider />
      <NextPart />
    </div>
  </div>
  
  );
};

export default HomePage;
