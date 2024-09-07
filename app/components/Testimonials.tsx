import Image from "next/image";
import Container from "./Container";
import { testimonialsBanner } from "../assets";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="bg-hoverColor w-full">
      <Container className="flex flex-col md:flex-row gap-10 items-start">
        <Image
          src={testimonialsBanner}
          alt="testimonials"
          className="w-full object-contain h-full p-10"
        />
        <div className="flex flex-col max-w-[600px] gap-y-7 py-20">
          <p className="text-xl font-normal tracking-widest text-white/80 font-headerFont">
            Featured Reviews
          </p>
          <h1 className="text-3xl tracking-wider font-headerFont font-medium">
            Yoga Studio Like No Others!
          </h1>
          <div className="flex items-center text-xl text-white">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
          <p className="text-2xl font-semibold">
            "Various kinds of utilities and health devices linked to time
            management, general human necessity or military movements can be
            found here."
          </p>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl tracking-widest text-gray-600 uppercase">
              Jessica Lim
            </h1>
            <Link
              href={"/"}
              className="flex items-center gap-x-1 text-white font-semibold tracking-wide hover:text-gray-950 duration-200"
            >
              View All Reviews
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
