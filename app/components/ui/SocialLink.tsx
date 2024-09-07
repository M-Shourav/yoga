import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";

const SocialLink = () => {
  return (
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
        <Link href={"https://www.instagram.com/masum_shourav/"} target="blank">
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
  );
};

export default SocialLink;
