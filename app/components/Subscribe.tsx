"use client";
import { IoMail } from "react-icons/io5";
import Container from "./Container";
import Link from "next/link";
import { useState } from "react";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = () => {
    if (email) {
    } else {
      alert("please enter your Email");
    }
    setEmail("");
  };
  return (
    <div className="bannerImg w-full  mt-10">
      <Container className="max-w-2xl mx-auto ">
        <div className="flex flex-col items-center justify-center gap-y-7 py-5">
          <Link
            href={"mailto:muhammadshourav625@gmail.com"}
            className="w-12 h-12 text-white hover:text-hoverColor bg-blue-700/80 inline-flex items-center justify-center 
          rounded-full hover:bg-blue-700 duration-200"
          >
            <IoMail className="text-2xl" />
          </Link>
          <h1 className="text-5xl text-white font-medium tracking-wider font-titleFont">
            Subscribe To Our Newsletter
          </h1>
          <p className="text-white text-base font-semibold tracking-wide max-w-[500px]">
            Morbi dignified sodales navigate rugged terrain. Sagittal courses
            intersect without congue." This keeps the core elements but shortens
            the text.
          </p>
        </div>

        <div className="w-full h-12 flex items-center justify-center gap-3 px-10">
          <input
            type="email"
            placeholder="E-mail Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-full w-full px-4 outline-none rounded-full placeholder:text-sm 
              text-base border-2 focus-visible:border-green-500"
          />
          <button
            type="submit"
            onClick={handleSubscribe}
            className="w-48 h-12 bg-hoverColor text-white rounded-full"
          >
            Subscribe
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
