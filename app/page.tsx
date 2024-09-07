import AboutPage from "./components/About";
import Banner from "./components/Banner";
import Classes from "./components/Classes";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Classes />
      <AboutPage />
      <Testimonials />
    </div>
  );
};

export default HomePage;
