import React from "react";
import StatsCard from "./StatsCard";
import icon1 from "../../assest/images/icon-brand-recognition.svg";
import icon2 from "../../assest/images/icon-detailed-records.svg";
import icon3 from "../../assest/images/icon-fully-customizable.svg";
type Props = {};
const data = [
  {
    title: "Brand Recongnition",
    description:
      " Boost your brand recongniton with each clicks. Generate links don't means a thing. Branded links help instll confidence in your content",
    icon: icon1,
  },
  {
    title: "Detail Records",
    description:
      "Gain insight into who is clicking your links. knowing when and where people engage with your content help inform better decisions",
    icon: icon2,
  },
  {
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
    icon: icon3,
  },
];

const Services = (props: Props) => {
  return (
    <div className="bg-background p-8 py-24">
      <div className="flex flex-col gap-3 py-8">
        <h1 className="text-center font-bold text-3xl">Advanced Statistics</h1>
        <p className="text-center font-semibold text-xl text-gray-violet">
          Track how your links performing across the web with{" "}
          <br className="hidden laptop:inline-block" />
          our advanced statistics dashboard
        </p>
      </div>
      <div className="services laptop:flex hidden items-center justify-center mt-12">
        {data.map((item, index) => (
          <>
            <StatsCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              style={{
                marginTop: `${index * 6}em`,
              }}
            />
            {data.length - 1 !== index && (
              <div
                key={index}
                style={{
                  marginTop: `${index * 6}em`,
                }}
                className="h-2 w-16 bg-primary "
              />
            )}
          </>
        ))}
      </div>{" "}
      <div className="laptop:hidden flex laptop:flex-row justify-center gap-4 flex-col mt-12">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <StatsCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
            {data.length - 1 !== index && (
              <div key={index} className="h-24 w-2 bg-primary " />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
