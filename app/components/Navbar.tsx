import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GiSandSnake } from "react-icons/gi";
import DownloadButton from "./Download/Downloadresume";

function Navbar() {
  return (
    <div className="animate-fadeIn  relative flex px-5 h-24 bg-gray-800  border-b-4 w-screen  blur-md filter-none text-2xl z-10 items-center">
      <div className="flex">
        <Link href="/">
          <div className=" sm:flex hidden text-2xl w-auto ml-0 sm:pl-4">
            Felix Prattes
          </div>
        </Link>
      </div>

      <div className=" flex-1 flex justify-end items-center">
        <div className="flex mr-12 items-center">
          <div className="flex space-x-6 justify-center items-center">
            <div className=" h-14 w-14 flex justify-center items-center">
              <Link href={"https://github.com/Lexi4eg"}>
                <BsGithub className="h-10 w-10" />
              </Link>
            </div>
            <div className="h-14 w-14 flex justify-center items-center">
              <Link href={"https://www.linkedin.com/in/felix-prattes/"}>
                <BsLinkedin className="h-10 w-10" />
              </Link>
            </div>
            <div className="h-14 w-20 flex justify-center items-center border border-white rounded-lg">
              <Link href={"/blog/"}>Blog</Link>
            </div>
            <div className="h-14 w-14 flex justify-center items-center">
              <Link href={"/snake"}>
                <GiSandSnake className="h-10 w-10" />
              </Link>
            </div>
            <div className="border p-2 rounded-md border-yellow-500 text-yellow-500">
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Navbar;
