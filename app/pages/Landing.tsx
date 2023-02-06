import React from "react";
import Center from "../components/Layout/Center";
import LeftSidebar from "../components/Layout/LeftSidebar";
import RightSidebar from "../components/Layout/RightSidebar";
import Navbar from "../components/Navbar";
import "./index.scss";

function Landing() {
  return (
    <div className="bg-gray-800 overflow-hidden overflow-y-hidden">
      <Navbar />
      <div className="page flex">
        <div className="page__left hidden md:flex items-center justify-center">
          <LeftSidebar />
        </div>
        <div className="page__center">
          <Center />
        </div>
        <div className="page__right hidden lg:flex  items-center justify-center">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Landing;
