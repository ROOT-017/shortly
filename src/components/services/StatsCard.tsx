import React, { CSSProperties } from "react";

type StatsCardProps = {
  title: string;
  description: string;
  icon: string;
  style?: CSSProperties;
};

const StatsCard = (props: StatsCardProps) => {
  return (
    <div
      className={`w-full laptop:h-[24em] laptop:w-1/5 deskstop:w-1/6 tablet:w-1/4 flex-col flex rounded-lg items-center laptop:items-start justify-center bg-white p-12 pt-0 relative`}
      style={props.style}
    >
      <div className="flex justify-center items-center w-24 h-24 rounded-full  bg-primary-dark relative -top-12">
        <img src={props.icon} alt={props.title} />
      </div>
      <div className="flex flex-col gap-4 pt-2">
        <h1 className="text-center laptop:text-start font-extrabold text-2xl">
          {props.title}
        </h1>
        <p className="text-center laptop:text-start font-bold text-lg text-gray-violet">
          {props.description}{" "}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
