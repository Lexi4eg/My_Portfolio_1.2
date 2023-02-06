"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";
import SnakeGame from "./snakegame";
import Head from "../head";

function MyComponent() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);

  return (
    <div>
      <Head />
      {isMobileDevice ? (
        <SnakeGame isTrue={true} />
      ) : (
        <SnakeGame isTrue={false} />
      )}
    </div>
  );
}

export default MyComponent;
