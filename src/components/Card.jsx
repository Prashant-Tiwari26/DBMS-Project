import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="image">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Intel_Core_i3_%2811th_generation%2C_logo%29.svg/1200px-Intel_Core_i3_%2811th_generation%2C_logo%29.svg.png"
          alt="name"
        />
      </div>
      <div className="info">
        <h4>Intel® Core™ i3-1220PE Processor</h4>
        <div className="specs">
          <div>
            <h6>CLock Speed</h6>
            <p>234Ghz</p>
          </div>
          <div>
            <h6>No. of Cores</h6>
            <p>235</p>
          </div>
          <div>
            <h6>Cache Size</h6>
            <p>235MB</p>
          </div>
        </div>
        <div className="buy">
          <div className="price">
            <h6>Price</h6>
            <p>$235</p>
          </div>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
