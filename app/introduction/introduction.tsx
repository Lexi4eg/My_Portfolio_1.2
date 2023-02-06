import React from "react";
import Link from "next/link";

function Introduction() {
  return (
    <div className="relative flex text-9–xl w-auto p-4 bg-gray-800 text-white font-sans font-semibold justify-left ">
      <div className="flex flex-row w-full p-4 pl-0">
        <div className="w-full pl-10 text-5xl bg-backg">
          <span className=" text-base sm:text-2xl pt-4 pb-4 font-medium font-la  block mr-6 ml-0 inherit w-40 text-yellow-400">
            &lt; body &gt;
          </span>
          <span className=" text-2xl pt-4 font-medium font-la block mr-6 ml-0 inherit text-yellow-400">
            &lt; section &gt;
          </span>

          <span className=" text-2xl pt-4 pb-4 font-medium font-la block mr-6 ml-0 inherit w-24 text-yellow-400">
            &lt; h1 &gt;
          </span>
          <div className="flex h-auto">
            <div className="text-7xl">
              <div>Hi,</div>
              <div>I'm Felix,</div>
              <div>Software Engineer</div>
            </div>
          </div>
          <span className=" text-2xl pt-4 pb-2 font-medium font-la block mr-6 ml-0 inherit w-24 text-yellow-400">
            &lt; p &gt;
          </span>
          <div className="font-sans text-2xl text-gray-400">
            Student / Software Engineer
          </div>
          <span className=" text-2xl pb-4 pt-2 font-medium font-la block mr-6 ml-0 inherit w-24 text-yellow-400">
            &lt; p &gt;
          </span>
          <div className="rounded border-2 mt-16 border-yellow-400 text-yellow-400 px-2 text-xl w-36 text-center pt-2 pb-2 font-bold">
            <Link href={"/contactme"}>Contact Me</Link>
          </div>
          <span className=" text-2xl pt-4 font-medium font-la block mr-6 ml-0 inherit text-yellow-400">
            &lt; section &gt;
          </span>
        </div>
      </div>
      <div className=" justify-center items-center relative w-1/3 r-0 hidden md:flex p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="600"
          height="600"
          viewBox="0 0 177.156 209"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="4"
              y1="104.407"
              x2="181.156"
              y2="110.593"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ff8e44" />
              <stop offset="0.5" stopColor="#f91362" />
              <stop offset="1" stopColor="#35126a" />
            </linearGradient>
          </defs>
          <path
            className="linear-gradient"
            fill="url('#linear-gradient')"
            d="M28,66L50,17s0.626-1.881,4-2,117-1,117-1a4.713,4.713,0,0,0,4-2c1.492-2.188,5-8,5-8s1.671-2.8,1,1-10,39-10,39,0.021,1.9-5,2-68-1-68-1V94h47s2.9,0.938,6-3a84.328,84.328,0,0,0,5-7s4.086-5.144,2,2-13,32-13,32a4.817,4.817,0,0,1-5,4c-4.358-.109-42,0-42,0v23a6.918,6.918,0,0,1-2,5c-2.276,2.521-55,59-55,59s-1.23,1.9-6,2-31,1-31,1l22-29a4.385,4.385,0,0,1,4-2c2.909,0.051,30-1,30-1s4.412-.579,6-4a25.03,25.03,0,0,0,2-10c0.022-2.69,0-115,0-115s-0.1-1.268,2-3a8.917,8.917,0,0,1,4-2s5.8-2.24-2-2-21,0-21,0-8.562-.757-11,3S28,66,28,66Z"
            transform="translate(-4 -3)"
          />
        </svg>
      </div>
    </div>
  );
}

export default Introduction;
