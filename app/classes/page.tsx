import Image from "next/image";
import { circleImage, classImg } from "../assets";
import Container from "../components/Container";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import ClassCard from "../components/ClassCard";
import Subscribe from "../components/Subscribe";

const cartArray = [
  {
    _id: "01",
    title: "Anusara",
    subttitle:
      "Anusara Yoga integrates alignment principles with a heart-centered approach.",
  },
  {
    _id: "02",
    title: "Ashtanga",
    subttitle:
      "Ashtanga Yoga is a dynamic practice involving a specific sequence of postures linked by breath",
  },
  {
    _id: "03",
    title: "Bikram",
    subttitle:
      "Bikram Yoga consists of a series of 26 postures and 2 breathing exercises performed in a heated room",
  },
  {
    _id: "04",
    title: "Hatha",
    subttitle:
      "Hatha Yoga focuses on balancing and harmonizing the body and mind through physical postures and breath control",
  },
  {
    _id: "05",
    title: "Hot Yoga",
    subttitle:
      "Hot Yoga involves practicing yoga in a heated room to enhance flexibility and detoxification.",
  },
  {
    _id: "06",
    title: "Iyengar",
    subttitle:
      "Iyengar Yoga emphasizes precise alignment and the use of props to support and deepen postures",
  },
  {
    _id: "07",
    title: "Restorative",
    subttitle:
      "Restorative Yoga uses gentle, supported poses to promote deep relaxation and stress relief",
  },
  {
    _id: "08",
    title: "Vinyasa",
    subttitle:
      "Vinyasa Yoga links breath with a flowing sequence of postures, creating a dynamic and fluid practice",
  },
];

const ClassPage = () => {
  return (
    <div>
      <Container className="flex flex-col lg:flex-row  gap-10 items-start justify-between">
        <div className="flex flex-col gap-7">
          <Title className="text-hoverColor tracking-wide font-titleFont text-sm md:text-base lg:text-2xl">
            Yoga For Everyone
          </Title>
          <h1 className="text-base lg:text-5xl font-titleFont ">
            What You Will Get
          </h1>
          <p className="text-base text-gray-500 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim
            autem modi ducimus delectus distinctio quasi, placeat quod vitae
            amet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <h1 className="text-xl font-titleFont text-hoverColor tracking-wide">
                Improve Flexibility
              </h1>
              <p className="max-w-[300px] text-gray-600 font-titleFont text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, eos.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-titleFont text-hoverColor tracking-wide">
                Perfects Posture
              </h1>
              <p className="max-w-[300px] text-gray-600 font-titleFont text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, eos.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-titleFont text-hoverColor tracking-wide">
                Muscles Strength
              </h1>
              <p className="max-w-[300px] text-gray-600 font-titleFont text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, eos.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-titleFont text-hoverColor tracking-wide">
                Increase Blood Flow
              </h1>
              <p className="max-w-[300px] text-gray-600 font-titleFont text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, eos.
              </p>
            </div>
          </div>
          <Button
            href="/contact"
            className="w-48 h-12 flex items-center justify-center text-base font-semibold"
          >
            Join Class Today
          </Button>
        </div>
        <div className=" relative">
          <Image
            src={circleImage}
            alt="circleImage"
            className="w-full h-full"
          />

          <span className="absolute -bottom-10 left-0 p-10 lg:p-16">
            <Image src={classImg} alt="classImg" className="" />
          </span>
        </div>
      </Container>
      <Container className="flex flex-col gap-y-10 ">
        <div className="flex flex-col items-center font-titleFont">
          <Title className="text-base md:text-2xl text-hoverColor tracking-wide font-titleFont">
            Yoga Styles
          </Title>
          <h1 className="text-base lg:text-4xl tracking-wide">
            Explore The Styles Of Yoga
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cartArray?.map((item) => (
            <div
              key={item?._id}
              className="border-1 border-gray-500 flex flex-col gap-3 py-5 px-2 shadow hover:shadow-lg"
            >
              <p className="text-hoverColor text-base lg:text-xl">
                {item?._id}
              </p>
              <h1 className="text-base lg:text-2xl tracking-wide font-titleFont">
                {item?.title}
              </h1>
              <p className="text-gray-500 text-[14px] font-medium tracking-wider">
                {item?.subttitle}
              </p>
            </div>
          ))}
        </div>

        <ClassCard />
        <Subscribe />
      </Container>
    </div>
  );
};

export default ClassPage;
