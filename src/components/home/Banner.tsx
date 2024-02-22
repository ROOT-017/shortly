import React, { useEffect, useState } from "react";
import bgdeskstop from "../../assest/images/bg-boost-desktop.svg";
import bgmobile from "../../assest/images/bg-boost-mobile.svg";

type Props = {};

const Banner = (props: Props) => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="flex  py-16 gap-4 flex-col justify-center items-center bg-primary-dark bg-cover"
      style={{
        backgroundImage: `url(${deviceWidth > 390 ? bgdeskstop : bgmobile})`,
      }}
    >
      <h1 className="text-3xl font-bold  text-white">Boost your links today</h1>
      <button className="font-bold font-sans text-xl rounded-full  py-3 px-6 bg-primary  text-white">
        Get Started
      </button>
    </div>
  );
};

export default Banner;
