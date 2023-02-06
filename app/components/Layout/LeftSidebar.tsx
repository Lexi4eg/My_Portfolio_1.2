import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function LeftSidebar() {
  return (
    <>
      <div className="fixed mt-16 ali">
        <div className="p-3 flex-col pb-4">
          <div className="h-10 w-12 mb-4">
            <Link href={"https://github.com/Lexi4eg"}>
              <BsGithub className="h-10 w-10 hover:text-yellow-400 hover:animate-bounce" />
            </Link>
          </div>
          <div>
            <Link
              className="h-10 w-10 "
              href={"https://www.linkedin.com/in/felix-prattes/"}
            >
              <BsLinkedin className="h-10 w-10 hover:text-yellow-400 hover:animate-bounce" />
            </Link>
          </div>
          <div className="block mt-5 ml-4 w-1 h-screen m-0 bg-white"></div>
        </div>
      </div>
    </>
  );
}

export default LeftSidebar;
