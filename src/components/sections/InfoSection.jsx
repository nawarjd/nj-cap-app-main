import MarioAndAdrian from "../../assets/Mario and Adrian A.jpg";
import restaurantChefB from "../../assets/restaurant chef B.jpg";

const InfoSection = () => {
  return (
    <div className="info_container">
      <div className="info_text">
        <h2>Little Lemon</h2>
        <h5>Chicago</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas
          enim rem. Animi saepe consectetur odit nesciunt! Esse dolore quibusdam
          perferendis quia, iure molestias. Magnam labore ratione voluptatibus
          voluptate nobis.
        </p>
      </div>

      <div className="info_imgs">
        <img src={restaurantChefB} alt="" />
        <img src={MarioAndAdrian} alt="" />
      </div>
    </div>
  );
};

export default InfoSection;
