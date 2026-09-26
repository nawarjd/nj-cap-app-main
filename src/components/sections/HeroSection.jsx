import food from "../../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero_sec = () => {
  return (
    <div className="hero_container">
      <div className="hero_inner_container">
        <div className="main_text">
          <div className="main_text_header">
            <h1>Little Lemon</h1>
            <h5>Chicago</h5>
          </div>
          <div className="hero_text_img_mobile">
            <p>
              we are a family owned Mediterranean restaurant, focused on
              traditional recipes servved with a modern twist.
            </p>
            <img
              src={food}
              className="food_img_mob hide_desk"
              alt="restaurant food"
            />
          </div>
          <Link className="main_btn" to="/reservations">Reserve a Table</Link>
        </div>

        <img
          src={food}
          className="food_img hide_mobile"
          alt="restaurant food"
        />
      </div>
    </div>
  );
};

export default Hero_sec;
