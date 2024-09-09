import Image from "next/image";
import Container from "../components/Container";
import { aboutImage } from "../assets";
import Title from "../components/ui/Title";
import SlideImage from "../components/SlideImage";
import Subscribe from "../components/Subscribe";

const AboutPage = () => {
  return (
    <Container className="py-10 lg:py-24 bg-bodyColor flex flex-col gap-y-7">
      {/* title section */}
      <div className="grid lg:grid-cols-3 gap-10">
        <h1 className="text-xl lg:text-5xl font-titleFont leading-6 font-medium">
          Yoga Studio in the city Of Mirpur Dhaka
        </h1>
        <div className="text-base text-gray-500 leading-7">
          <p>
            Here — Suspend the laoreet, morbi, and donec dictumst as needed.
            And, complete the anterior in pulvinar ullamcorper. It was in
            scelerisque but nothing tells the mass about the element. Tortor, in
            risus, diam, and egestas in, at fusce volutpat. The habit of
            elementarily laoreet the adipiscence and increase nullam power and
            rhoncus semper. Name integer with mauris ipsum tortor
          </p>
        </div>
        <div className="text-base text-gray-500 leading-7">
          <p>
            Here — Leo moves forward with no consequence in the direction of a
            hateful course. That is, the sharp point is not interesting. Cras
            said to hold the pulvinar, having tuned it. Life's task is not
            really sharp. The gate sits on the edge of a morbid alliance with
            Phasellus. Porttitor said it was a semi-convex support system in
            favor of a price increase.
          </p>
        </div>
      </div>
      {/* image section */}
      <div className="flex flex-col md:flex-row gap-x-7 items-center justify-between ">
        <div className="flex-1">
          <Image
            src={aboutImage}
            alt="aboutImage"
            className="w-52 h-52 lg:w-full lg:h-full lg:p-5"
          />
        </div>
        <div className="flex flex-col gap-y-7">
          <p className="text-sm lg:text-4xl font-titleFont max-w-[500px] font-semibold text-gray-700 leading-7">
            "Here — The scelerisque of hatefully combining the plates of
            scelerisque into the center is no longer a goal. It will now not
            fall or be stopped. Ulricy has suspended the mass of efforts for a
            mission and put its mass into a place without ambition."
          </p>
          <h1 className=" uppercase text-gray-700 font-titleFont">
            Helena Hayes
            <p className="text-sm capitalize">Founder, Instructor</p>
          </h1>
        </div>
      </div>
      <div className="">
        <Title className="text-center mb-10 text-base lg:text-3xl">
          Yoga Instruction
        </Title>
        <SlideImage />
      </div>
      <Subscribe />
    </Container>
  );
};

export default AboutPage;
