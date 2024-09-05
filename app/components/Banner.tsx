import Image from "next/image";
import Container from "./Container";
import { banner } from "../assets";
import Link from "next/link";
import { FaArrowRightLong, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import Button from "./ui/Button";

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
        <div className="flex md:flex-col gap-5 text-lg mt-10 md:mt-0">
          <div className="titleStyle ">
            <Link
              href={"https://www.facebook.com/profile.php?id=100027878711748"}
              target="blank"
            >
              <FaFacebookF />
            </Link>
          </div>
          <div className="titleStyle">
            <Link href={"https://x.com/MasumAh68543"} target="blank">
              <FaXTwitter />
            </Link>
          </div>
          <div className="titleStyle">
            <Link
              href={"https://www.instagram.com/masum_shourav/"}
              target="blank"
            >
              <FaInstagram />
            </Link>
          </div>
          <div className="titleStyle">
            <Link
              href={"https://www.youtube.com/@mdmasumbillahshourav9196"}
              target="blank"
            >
              <RiYoutubeLine />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
