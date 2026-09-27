import MarioAndAdrian from "../../assets/Mario and Adrian A.jpg";
import restaurantChefB from "../../assets/restaurant chef B.jpg";

const InfoSection = ({ headingLevel = "h2", variant = "home" }) => {
  const Heading = headingLevel;

  return (
    <section
      className={`info_container info_container--${variant}`}
      aria-labelledby="about-title"
    >
      <div className="info_text">
        <Heading id="about-title">Little Lemon</Heading>
        <h5>Chicago</h5>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant in the heart
          of Chicago. We combine treasured family recipes with fresh, seasonal
          ingredients and a modern twist. From relaxed lunches to memorable
          dinners, we welcome every guest with warm hospitality and vibrant
          flavors inspired by the Mediterranean coast.
        </p>
      </div>

      <div className="info_imgs">
        <img src={restaurantChefB} alt="" />
        <img src={MarioAndAdrian} alt="" />
      </div>
    </section>
  );
};

export default InfoSection;
