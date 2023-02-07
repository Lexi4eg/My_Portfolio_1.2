import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <>
      <div className="flex flex-col ">
        <Link href={"/"} className="flex pl-8 pt-2  sm:p-3 items-center ">
          <svg
            className="bg-black  m-1 rounded-lg p-1 "
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="50"
            height="50"
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
        </Link>
        <div className="">
          <Categories />
        </div>
      </div>
    </>
  );
}

function Categories() {
  return (
    <>
      {" "}
      <div className=" bg-gray1 sm:pt-8 sm:pl-10 p-8  mb-0 w-full sm:w-60 ">
        <h1 className="text-white text-2xl pb-8">Categories</h1>
        <div className=" text-türkis">
          <ul className="p-1 pl-0">
            <li>Computer Science</li>
            <li>HTML & CSS</li>
            <li>Javascript</li>
            <li>SQL & Databases</li>
            <li>Web Development</li>
            <li>WordPress</li>
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Sidebar;
