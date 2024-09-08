import Link from "next/link";
import Container from "./Container";
import Title from "./ui/Title";
import { RiYoutubeLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
        <div>
          <Title>Yoga Style</Title>
          <div className="flex flex-col gap-y-2 mt-5 w-20">
            <Link
              href={"/"}
              className=" text-base text-gray-700 hover:text-hoverColor duration-200"
            >
              Anusara
            </Link>
            <Link
              href={"/"}
              className="text-base text-gray-700 hover:text-hoverColor duration-200"
            >
              Ashtanga
            </Link>
            <Link
              href={"/"}
              className="text-base text-gray-700 hover:text-hoverColor duration-200"
            >
              Bikram
            </Link>
            <Link
              href={"/"}
              className="text-base text-gray-700 hover:text-hoverColor duration-200"
            >
              Hatha
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-2 mt-10 w-20">
            <Link
              href={"/"}
              className="text-base text-gray-700 hover:text-hoverColor duration-200"
            >
              Hot Yoga
            </Link>
            <Link
              href={"/"}
              className="text-base text-gray-700 hover:text-hoverColor duration-200"
            >
              Lyenger
            </Link>
            <Link
              href={"/"}
              className="text-base text-gray-700 hover:text-hoverColor duration-200"
            >
              Restorative
            </Link>
            <Link
              href={"/"}
              className="text-base text-gray-700 hover:text-hoverColor duration-200"
            >
              Vinyasa
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <Title className="text-3xl font-semibold">Millie Yoga</Title>
          <p className="text-sm text-gray-500 leading-6">
            Habitant quis nec nibh molestie lorem eu fermentum massa viverra
            aenean sed sed neque tincidunt sed praesent elit enim quisque
            tristique quis cras.
          </p>
          <div className="flex gap-x-2 text-sm ">
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
        <div>
          <Title className=" uppercase font-titleFont text-lg">
            Contact Info
          </Title>
          <div className="flex flex-col gap-y-3 mt-3">
            <p className="flex gap-x-1 text-sm text-gray-500 font-medium">
              <MdLocationPin className=" text-hoverColor text-3xl" />
              1224 5th Aveneu Mirpur-12 Dhaka-1200,Bangladesh
            </p>
            <Link
              href={"tel:+8801710267985"}
              className="flex gap-x-1 text-sm text-gray-500 font-medium hover:text-blue-600 duration-200"
            >
              <FaPhoneAlt className=" text-hoverColor text-xl" />
              +88 01710267985
            </Link>
            <Link
              href={"mailto:Muhammadshourav625@gmail.com"}
              className="flex gap-x-1 text-sm text-gray-500 font-medium hover:text-blue-600 duration-200"
            >
              <IoMdMail className=" text-hoverColor text-xl" />
              Muhammadshourav625@gmail.com
            </Link>
          </div>
        </div>
      </Container>
      <div className="text-center text-base text-black mb-5">
        <p>Copyright © 2024 Masum Ahmed</p>
      </div>
    </div>
  );
};

export default Footer;
