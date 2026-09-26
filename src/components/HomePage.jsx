import Hero_sec from "./sections/HeroSection";
import WeekSpecialsSection from "./sections/WeekSpecialsSection";
import Testimonials from "./sections/Testimonials";
import InfoSection from "./sections/InfoSection";

const HomePage = () => {
  return (
    <main>
      <Hero_sec />
      <WeekSpecialsSection />
      <Testimonials />
      <InfoSection />
    </main>
  );
};

export default HomePage;
