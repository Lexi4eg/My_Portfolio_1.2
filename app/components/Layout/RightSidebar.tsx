import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function RightSidebar() {
  return (
    <div className="fixed mt-0 ali">
      <div className="p-3 flex-col">
        <div className="h-auto w-10  rotate-90 mb-4">
          <Link href={"https://github.com/Lexi4eg"}>
            felix.prattes@gmail.com
          </Link>
        </div>
        <div className="block mt-5 ml-4 w-1 translate-y-40 h-screen m-0 bg-white"></div>
      </div>
    </div>
  );
}

export default RightSidebar;
