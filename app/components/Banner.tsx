import Container from "./Container";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./ui/Button";
import SocialLink from "./ui/SocialLink";

const Banner = () => {
  return (
    <Container className="py-5">
      <div className="py-10 lg:py-24 md:flex md:items-end md:justify-between bgBanner ">
        <div className="flex flex-col gap-y-5 max-w-md relative">
          <h1 className="lg:text-8xl font-titleFont">Yoga Studio</h1>
          <p className="text-gray-600 leading-7">
            Yoga is a mind-body practice that improves flexibility, strength,
            and relaxation through poses, breathing, and meditation. It reduces
            stress and enhances mental clarity.
          </p>
          <div className="flex items-center gap-14">
            <Button href="/">Join Class Today</Button>
            <Link
              href={"/"}
              className="flex items-center gap-x-1 text-gray-600 font-semibold tracking-wide"
            >
              Learn More
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <SocialLink />
      </div>
    </Container>
  );
};

export default Banner;
