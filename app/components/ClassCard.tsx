import Image from "next/image";
import { card } from "../navigate";
import Container from "./Container";
import Title from "./ui/Title";
import { div } from "framer-motion/client";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ClassCard = () => {
  return (
    <Container className="flex flex-col gap-6">
      <div className="flex flex-col gap-y-7">
        <Title className="text-5xl">Popular Classes</Title>
        <p className="max-w-[500px] text-base text-gray-500 tracking-wide leading-6">
          Morbi lobortis refers to dignified social gatherings with a focus on
          health and well-being. It combines elegance with a balanced approach
          to life.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-7 items-center">
        {card?.map((item) => (
          <div
            key={item?.name}
            className=" rounded-md shadow-xl border border-green-500 hover:shadow-gray-700 duration-200"
          >
            <Link href={"/classes"}>
              <Image
                src={item?.images}
                alt="cardImage"
                className="object-contain w-full rounded-md"
              />
            </Link>
            <div className="px-4 flex flex-col gap-3 py-3 font-titleFont">
              <h1 className="text-2xl text-gray-800">{item?.name}</h1>
              <p className="text-sm text-gray-600">{item?.description}</p>
              <Link
                href={"/classes"}
                className="flex items-center gap-x-1 text-hoverColor font-semibold tracking-wide hover:text-gray-950 duration-200"
              >
                Learn More
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ClassCard;
