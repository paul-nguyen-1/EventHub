import { useState, useEffect } from "react";

export const Navbar = () => {
  const [heightState, setHeightState] = useState("pageTop");

  useEffect(() => {
    let lastVal = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastVal) {
        setHeightState("scrollDown");
      } else if (y < lastVal) {
        setHeightState("scrollUp");
      }
      if (y === 0) {
        setHeightState("pageTop");
      }
      lastVal = y;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`header text-center p-4 fixed w-full text-lg font-semibold bg-red-500 transition-transform duration-700 ease-in-out ${
          heightState === "scrollDown" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        navbar
      </div>
      <div className="pageContent">
        <div className="each h-screen">DELETE AFTER CREATING HOME FEATURE</div>
        <div className="each h-screen"></div>
        <div className="each h-screen"></div>
        <div className="each h-screen"></div>
        <div className="each h-screen"></div>
      </div>
    </>
  );
};
