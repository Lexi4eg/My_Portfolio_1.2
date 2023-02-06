import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
      <div className=" p-16 flex flex-row items-center bg-backg ">
        <div className=" flex-initial">
          <span className=" text-2xl pb-4 pt-2 font-medium font-la block mr-6 ml-0 inherit w-28 text-yellow-400">
            &lt; h1 &gt;
          </span>
          <div className=" font-sans text-5xl font-bold">01.About Me</div>
          <span className=" text-2xl pb-4 pt-2 font-medium font-la block mr-6 ml-0 inherit w-28 text-yellow-400">
            &lt; h1 &gt;
          </span>

          <span className=" text-2xl  pt-8 font-medium font-la block mr-6 ml-0 inherit w-28 text-yellow-400">
            &lt; p &gt;
          </span>
          <h1 className=" text-7xl font-extrabold mb-6"></h1>
          <div className=" text-xl">
            Hello! My name is{" "}
            <span className="text-yellow-400 text-2xl w-full">
              Felix&nbsp;Prattes
            </span>{" "}
            and I’m a Student located in Austria and i have a serious passion
            for Backend , web Development and creating intuitive, dynamic user
            experiences.
            <br />
            <br />
            Well-organised person, problem solver, focused student at{" "}
            <Link
              className="text-yellow-400 text-2xl"
              href={"https://www.bulme.at"}
            >
              HTL Bulme
            </Link>{" "}
            with high attention to detail. Fan of Competetive Programming,
            outdoor activities, TV series and gliding.
            <br />
            <br />
            Here are the few technologies that I'have been working recently:{" "}
            <br />
            <ul className="p-4 grid sm:text-2xl sm:grid-rows-3 gap-2 sm:grid-flow-col m-1 text-2xl overflow-hidden list-none mb-4">
              <li className="flex flex-row ">
                <div className=" text-yellow-400">&gt;</div> Javascript(ES6+)
              </li>
              <li className="flex flex-row ">
                <div className=" text-yellow-400">&gt;</div> Python
              </li>
              <li className="flex flex-row ">
                <div className=" text-yellow-400">&gt;</div> HTML/CSS
              </li>
              <li className="flex flex-row ">
                <div className=" text-yellow-400">&gt;</div> Nodejs
              </li>
              <li className="flex flex-row ">
                <div className=" text-yellow-400">&gt;</div> Reactjs
              </li>
              <li className="flex flex-row ">
                <div className=" text-yellow-400">&gt;</div> Nextjs
              </li>
              <li className="flex flex-row ">
                <div className=" text-yellow-400">&gt;</div> SQL
              </li>
              <li className="flex flex-row ">
                <div className=" text-yellow-400">&gt;</div> Data Structures
              </li>
              <li className="flex flex-row ">
                <div className=" text-yellow-400">&gt;</div> Algorithms
              </li>
            </ul>
          </div>
          <span className=" text-2xl pb-4 pt-2 font-medium font-la block mr-6 ml-0 inherit w-30 text-yellow-400">
            &lt; section &gt;
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
