import React from "react";
import greekSalad from "../../assets/greek salad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";
import deliveryIcon from "../../assets/delivery.svg";

const WeekSpecialsSection = () => {
  const cards = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad,
      delivery: "Order a delivery",
      deliveryIcon: deliveryIcon,
    },
    {
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruchetta,
      delivery: "Order a delivery",
      deliveryIcon: deliveryIcon,
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessert,
      delivery: "Order a delivery",
      deliveryIcon: deliveryIcon,
    },
  ];

  return (
    <div className="week_specials_container">
      <div className="week_specials_top">
        <h2>This Week Specials!</h2>
        <button className="main_btn">Online Menu</button>
      </div>

      <div className="week_specials_cards">
        {cards.map((card, index) => (
          <div key={index} className="week_special_card">
            <img src={card.image} alt={card.title} />
            <div className="week_special_info">
              <div className="week_special_info_top">
                <h3>{card.title}</h3>
                <span>{card.price}</span>
              </div>

              <p>{card.description}</p>

              <div className="delivery_info">
                <p>{card.delivery}</p>
                <img
                  className="delivery_icon"
                  src={card.deliveryIcon}
                  alt="Delivery Icon"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekSpecialsSection;
