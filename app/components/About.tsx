import { MdArrowRight } from "react-icons/md";
import Container from "./Container";
import Button from "./ui/Button";
import Title from "./ui/Title";

const AboutPage = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
      <div className="flex flex-col items-start gap-5">
        <Title className="text-2xl font-titleFont text-hoverColor tracking-wide">
          Our Studio
        </Title>
        <h2 className="text-6xl font-semibold max-w-screen-sm text-gray-800">
          Yoga Studio in the City of Mirpur Dhaka
        </h2>
        <Button
          href="/classes"
          className="w-40 h-10 flex items-center justify-center"
        >
          Learn More <MdArrowRight />
        </Button>
      </div>
      <div>text2</div>
    </Container>
  );
};

export default AboutPage;
