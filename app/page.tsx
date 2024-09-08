import AboutPage from "./components/About";
import Banner from "./components/Banner";
import Classes from "./components/Classes";
import Testimonials from "./components/Testimonials";
import ClassCard from "./components/ClassCard";
import Subscribe from "./components/Subscribe";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Classes />
      <AboutPage />
      <Testimonials />
      <ClassCard />
      <Subscribe />
    </div>
  );
};

export default HomePage;
