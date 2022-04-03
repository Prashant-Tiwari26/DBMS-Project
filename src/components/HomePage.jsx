import React from "react";
import ReactCarousel from "./ReactCarousel";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <h1> Processor Shop</h1>
      </div>
      <ReactCarousel title="Intel Core-i3 Series"/>
      <ReactCarousel title="Intel Core-i5 Series"/>
      <ReactCarousel title="Intel Core-i7 Series"/>
      <ReactCarousel title="Intel Core-i9 Series"/>
    </div>
  );
};

export default HomePage;
