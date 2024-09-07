import { MdLocationPin } from "react-icons/md";
import Container from "./Container";
import Title from "./ui/Title";
import Link from "next/link";
import { RiShareBoxLine } from "react-icons/ri";
import Image from "next/image";
import { yoga1 } from "../assets";
import SlideImage from "./SlideImage";
import SocialLink from "./ui/SocialLink";

const AboutPage = () => {
  return (
    <Container className=" py-10 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex flex-col items-start gap-5">
          <Title className="text-2xl font-titleFont text-hoverColor tracking-wide">
            Our Studio
          </Title>
          <h2 className="text-4xl font-bodyFont font-medium max-w-[400px]  text-gray-800 tracking-wide">
            Yoga Studio in the City of Mirpur Dhaka
          </h2>
          <p className="flex items-center gap-x-1 text-lg font-medium">
            <MdLocationPin className=" text-hoverColor" />
            1224 5th Aveneu Mirpur-12 Dhaka-1200,Bangladesh
          </p>
          <Link
            href=""
            className="w-44 h-10 flex gap-x-2 items-center justify-center 
          text-base text-gray-600  font-semibold tracking-wide rounded-full 
          border border-hoverColor hover:bg-hoverColor hover:text-white duration-200"
          >
            Find Us On Map <RiShareBoxLine className="text-xl" />
          </Link>
        </div>
        <div className="flex flex-col gap-7">
          <div className="w-20 h-[1px] bg-hoverColor " />
          <p className="descriptionStyle">
            At millie, we believe in the transformative power of yoga to nurture
            the body, mind, and spirit. Our practice focuses on creating balance
            through mindful movement, breathwork, and meditation, helping you
            find inner peace and physical strength. Whether you're a beginner or
            an experienced yogi, our welcoming environment offers a variety of
            classes tailored to all levels. Our expert instructors guide you
            through poses that improve flexibility, strength, and relaxation,
            allowing you to connect deeply with yourself and the present moment.
            Join us on this journey toward well-being and discover the holistic
            benefits of yoga, from reducing stress and anxiety to promoting
            mental clarity and emotional resilience. At [Yoga Studio Name], we
            invite you to reconnect with your true self, one breath at a time.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 py-10">
        <Title className="text-4xl font-medium tracking-wide">
          Yoga Instructions
        </Title>
        <SlideImage />
      </div>
    </Container>
  );
};

export default AboutPage;
