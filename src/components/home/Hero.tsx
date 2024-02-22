import React from "react";
import homeImg from "../../assest/images/illustration-working.svg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex h-[90vh]   tablet:justify-between items-center flex-col tablet:flex-row-reverse laptop:pl-48">
      <div className="flex mb-8 tablet:mb-0 relative  ">
        <img
          src={homeImg}
          alt="illustration-working"
          className="laptop:h-[42em]"
        />
      </div>
      <div className="flex flex-col items-center text-center tablet:text-left tablet:items-start gap-4">
        <h2
          className="text-[2em] laptop:text-[4em] font-sans font-extrabold"
          style={{
            lineHeight: "1.02",
          }}
        >
          More than just <br className="hidden tablet:inline-block" /> shorter
          links
        </h2>
        <p className="text-lg laptop:text-2xl text-gray-violet font-[500]">
          Build your brand's recognition and get detailed{" "}
          <br className="hidden tablet:inline-block" /> insights on how your
          links are performing.
        </p>
        <div className="pt-10">
          <button className="font-semibold font-sans text-2xl rounded-full  py-4 px-6 bg-primary  text-white">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
