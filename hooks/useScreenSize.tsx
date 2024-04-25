"use client";
import { useState, useEffect } from "react";

// Define an interface for the screenSize state
interface ScreenSize {
  width: number;
  height: number;
}

const useScreenSize = (): ScreenSize => {
  // Initialize the state with the window's inner dimensions
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
