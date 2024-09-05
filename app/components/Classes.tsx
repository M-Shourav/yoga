import Link from "next/link";
import Container from "./Container";
import Button from "./ui/Button";
import Title from "./ui/Title";

const Classes = () => {
  return (
    <div>
      <Container className="grid gird-col-1 lg:grid-cols-3 gap-7">
        <div className="flex flex-col gap-y-5 items-start">
          <h3 className="text-4xl text-gray-900 font-titleFont">
            Many Styles Of Yoga To Suit Everyone
          </h3>
          <p>
            Yoga blends breath, movement, and meditation to promote relaxation,
            flexibility, and mental clarity. It is a path to balance and inner
            peace.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <Title className=" uppercase text-xl">Ansura</Title>
            <p className="text-lg text-gray-500 tracking-wide font-titleFont">
              Anusara Yoga integrates alignment principles with a heart-centered
              approach. It focuses on aligning the body and mind to enhance
              personal and spiritual growth.
            </p>
            <Link
              href={"/classes"}
              className="text-base text-gray-600 font-medium  underline underline-offset-2 hover:text-hoverColor duration-200"
            >
              Learn More
            </Link>
          </div>
          <div>
            <Title className=" uppercase text-xl">Ashtanga</Title>
            <p className="text-lg text-gray-500 tracking-wide font-titleFont">
              Ashtanga Yoga is a dynamic practice involving a specific sequence
              of postures linked by breath. It emphasizes building strength,
              flexibility, and mental focus through a rigorous and disciplined
              approach..
            </p>
            <Link
              href={"/classes"}
              className="text-base text-gray-600 font-medium  underline underline-offset-2 hover:text-hoverColor duration-200"
            >
              Learn More
            </Link>
          </div>
          <div>
            <Title className=" uppercase text-xl">Bikram</Title>
            <p className="text-lg text-gray-500 tracking-wide font-titleFont">
              Bikram Yoga consists of a series of 26 postures and 2 breathing
              exercises performed in a heated room. It aims to promote physical
              and mental flexibility, strength, and detoxification
            </p>
            <Link
              href={"/classes"}
              className="text-base text-gray-600 font-medium  underline underline-offset-2 hover:text-hoverColor duration-200"
            >
              Learn More
            </Link>
          </div>
          <div>
            <Title className=" uppercase text-xl">Hatha</Title>
            <p className="text-lg text-gray-500 tracking-wide font-titleFont">
              Hatha Yoga focuses on balancing and harmonizing the body and mind
              through physical postures and breath control. It is often seen as
              a foundation for various other yoga styles, emphasizing alignment
              and relaxation.
            </p>
            <Link
              href={"/classes"}
              className="text-base text-gray-600 font-medium  underline underline-offset-2 hover:text-hoverColor duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <Title className=" uppercase text-xl">Hot Yoga</Title>
            <p className="text-lg text-gray-500 tracking-wide font-titleFont">
              Hot Yoga involves practicing yoga in a heated room to enhance
              flexibility and detoxification. It typically features a series of
              postures that challenge strength, endurance, and balance.
            </p>
            <Link
              href={"/classes"}
              className="text-base text-gray-600 font-medium  underline underline-offset-2 hover:text-hoverColor duration-200"
            >
              Learn More
            </Link>
          </div>
          <div>
            <Title className=" uppercase text-xl">Iyengar</Title>
            <p className="text-lg text-gray-500 tracking-wide font-titleFont">
              Iyengar Yoga emphasizes precise alignment and the use of props to
              support and deepen postures. It focuses on developing strength,
              flexibility, and stability through careful attention to detail and
              precision.
            </p>
            <Link
              href={"/classes"}
              className="text-base text-gray-600 font-medium underline underline-offset-2 hover:text-hoverColor duration-200"
            >
              Learn More
            </Link>
          </div>
          <div>
            <Title className=" uppercase text-xl">Restorative</Title>
            <p className="text-lg text-gray-500 tracking-wide font-titleFont">
              Restorative Yoga uses gentle, supported poses to promote deep
              relaxation and stress relief. It focuses on calming the nervous
              system and restoring balance through extended hold times and
              props.
            </p>
            <Link
              href={"/classes"}
              className="text-base text-gray-600 font-medium  underline underline-offset-2 hover:text-hoverColor duration-200"
            >
              Learn More
            </Link>
          </div>
          <div>
            <Title className=" uppercase text-xl">Vinyasa</Title>
            <p className="text-lg text-gray-500 tracking-wide font-titleFont">
              Vinyasa Yoga links breath with a flowing sequence of postures,
              creating a dynamic and fluid practice. It emphasizes smooth
              transitions and continuous movement to build strength,
              flexibility, and mindfulness.
            </p>
            <Link
              href={"/classes"}
              className="text-base text-gray-600 font-medium  underline underline-offset-2 hover:text-hoverColor duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Container>
      <div></div>
    </div>
  );
};

export default Classes;
