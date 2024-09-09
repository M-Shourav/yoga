import { FaStar } from "react-icons/fa6";
import Container from "../components/Container";
import Subscribe from "../components/Subscribe";
import Testimonials from "../components/Testimonials";

const testimonials = () => {
  return (
    <div>
      <Testimonials />
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <h1 className="text-5xl">4.7</h1>
          <div>
            <h1 className="flex items-center text-hoverColor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </h1>
            <h1>567 reviews</h1>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <h1 className="text-5xl">4.7</h1>
          <div>
            <h1 className="flex items-center text-hoverColor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </h1>
            <h1>567 reviews</h1>
          </div>
        </div>{" "}
        <div className="flex items-center gap-x-2">
          <h1 className="text-5xl">4.7</h1>
          <div>
            <h1 className="flex items-center text-hoverColor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </h1>
            <h1>567 reviews</h1>
          </div>
        </div>{" "}
        <div className="flex items-center gap-x-2">
          <h1 className="text-5xl">4.7</h1>
          <div>
            <h1 className="flex items-center text-hoverColor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </h1>
            <h1>567 reviews</h1>
          </div>
        </div>
      </Container>
      <Subscribe />
    </div>
  );
};

export default testimonials;
