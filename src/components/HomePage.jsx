import React from "react";
import ReactCarousel from "./ReactCarousel";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <h1> Processor Shop</h1>
      </div>
      <ReactCarousel
        title="Intel Core-i3 Series"
        image="https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Intel_Core_i3_%2811th_generation%2C_logo%29.svg/1200px-Intel_Core_i3_%2811th_generation%2C_logo%29.svg.png"
      />
      <ReactCarousel
        title="Intel Core-i5 Series"
        image="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg/1200px-Intel_Core_i5_%2811th_generation%2C_logo%29.svg.png"
      />
      <ReactCarousel
        title="Intel Core-i7 Series"
        image="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Intel_Core_i7_%2811th_generation%2C_logo%29.svg/1200px-Intel_Core_i7_%2811th_generation%2C_logo%29.svg.png"
      />
      <ReactCarousel
        title="Intel Core-i9 Series"
        image="https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Intel_Core_i9_%2811th_generation%2C_logo%29.svg/1200px-Intel_Core_i9_%2811th_generation%2C_logo%29.svg.png"
      />
    </div>
  );
};

export default HomePage;
