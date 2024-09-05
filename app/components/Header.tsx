"use client";
import Link from "next/link";
import { NavigateArray } from "../navigate";
import Container from "./Container";
import Image from "next/image";
import { logo } from "../assets";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="h-20 shadow-lg shadow-gray-300 sticky top-0 bg-bodyColor z-50">
      <Container className="h-full flex items-center justify-between relative">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <div className="hidden lg:inline-flex gap-5 items-center">
          {NavigateArray?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className=" text-[14px] hover:text-black text-gray-600 tracking-wide uppercase group relative "
            >
              {item?.title}
              <div className="absolute bottom-0 left-0 w-[0px] h-[1px] bg-black group-hover:w-full duration-500" />
            </Link>
          ))}

          <Link
            className="px-6 py-3 rounded-full text-sm bg-hoverColor text-white hover:bg-black duration-500"
            href={"tel:+8801710267985"}
          >
            +88 01710267985
          </Link>
        </div>
        {/* mobileScreen */}
        <div
          onClick={() => setShow(true)}
          className="lg:hidden w-6 h-5  flex flex-col items-center justify-between cursor-pointer overflow-hidden text-2xl relative group"
        >
          <span className="w-full h-[2px] bg-black  transform inline-flex  group-hover:translate-x-2 duration-200" />
          <span className="w-full h-[2px] bg-black  transform inline-flex translate-x-3 group-hover:-translate-x-0 duration-200" />
          <span className="w-full h-[2px] bg-black  transform inline-flex  group-hover:translate-x-2 duration-200" />
        </div>

        {show && (
          <div
            onClick={() => setShow(false)}
            className="w-[60%] h-screen bg-black/50 absolute top-0 right-0 flex flex-col items-end"
          >
            <div className="w-full h-full bg-bodyColor flex flex-col items-center">
              <MdOutlineClose className="text-3xl absolute top-4 right-4 text-black hover:text-red-500 duration-200 cursor-pointer" />
              <div className="flex flex-col gap-5 items-start py-10">
                {NavigateArray?.map((item) => (
                  <Link
                    key={item?.title}
                    href={item?.href}
                    className=" text-[14px] hover:text-black text-gray-600 tracking-wide uppercase group relative "
                  >
                    {item?.title}
                    <div className="absolute bottom-0 left-0 w-[0px] h-[1px] bg-black group-hover:w-full duration-500" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
