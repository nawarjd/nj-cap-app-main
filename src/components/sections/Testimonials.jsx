import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      rating: "4.9",
      content: "The food here is amazing!",
      Image: "https://i.pravatar.cc/80?img=1",
    },
    {
      name: "Jane Smith",
      rating: "4.8",
      content: "Best restaurant in town!",
      Image: "https://i.pravatar.cc/80?img=5",
    },
    {
      name: "Mike Johnson",
      rating: "4.7",
      content: "Great atmosphere!",
      Image: "https://i.pravatar.cc/80?img=68",
    },
    {
      name: "Sarah Williams",
      rating: "4.6",
      content: "excellent service!",
      Image: "https://i.pravatar.cc/80?img=44",
    },
  ];

  return (
    <div className="testimonials_container">
      <div className="testimonials_inner_container">
        <h2>Testimonials</h2>

        <div className="testimonials_cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial_card">
              <p>{testimonial.rating}</p>

              <div className="testimonial_nam_img">
                <img src={testimonial.Image} alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
              </div>

              <p>{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
