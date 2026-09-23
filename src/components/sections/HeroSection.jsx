import React from "react";
import food from "../../assets/restauranfood.jpg";

const Hero_sec = () => {
  return (
    <div className="hero_container">
      <div className="hero_inner_container">
        <div className="main_text">
          <div className="main_text_header">
            <h1>Little Lemon</h1>
            <h5>Chicago</h5>
          </div>
          <p>
            we are a family owned Mediterranean restaurant, focused on
            traditional recipes servved with a modern twist.
          </p>
          <button className="main_btn">Reserve a Table</button>
        </div>

        <img src={food} className="food_img hide_mobile" alt="restaurant food" />
      </div>
    </div>
  );
};

export default Hero_sec;
