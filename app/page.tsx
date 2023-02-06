import React from "react";
import styles from "./page.module.css";
import Landing from "./pages/Landing";

export default function Home() {
  return (
    <>
      <div className="text-white">
        <Landing />
      </div>
    </>
  );
}
