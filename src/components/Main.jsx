import React from "react";
import food from "../assets/restauranfood.jpg";

const Main = () => {
  return (
    <div className="main_container">
      <div className="main_inner_container">
        <div className="main_text">
          <h1>Little Lemon</h1>
          <h5>Chicago</h5>
          <p>
            we are a family owned Mediterranean restaurant, focused on
            traditional recipes servved with a modern twist.
          </p>
        </div>
        <img src={food} className="food_img" alt="restaurant food" />
      </div>
    </div>
  );
};

export default Main;
