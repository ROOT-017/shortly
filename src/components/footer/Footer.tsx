import React from "react";
import logo from "../../assest/images/shotly-white.png";
import facebook from "../../assest/images/icon-facebook.svg";
import twitter from "../../assest/images/icon-twitter.svg";
import pinterest from "../../assest/images/icon-pinterest.svg";
import instagram from "../../assest/images/icon-instagram.svg";
import { Link } from "react-router-dom";

type Props = {};

const items = [
  {
    title: "Features",
    items: [
      {
        title: "Link Shortening",
        url: "#",
      },
      {
        title: "Branded Links",
        url: "#",
      },
      {
        title: "Analytics",
        url: "#",
      },
    ],
  },
  {
    title: "Resoursces",
    items: [
      {
        title: "Blog",
        url: "#",
      },
      {
        title: "Developer",
        url: "#",
      },
      {
        title: "Support",
        url: "#",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "About",
        url: "#",
      },
      {
        title: "Our Team",
        url: "#",
      },
      {
        title: "Careers",
        url: "#",
      },
      {
        title: "Contact",
        url: "#",
      },
    ],
  },
];
const socialConnect = [
  {
    title: "Facebook",
    url: "#",
    icon: facebook,
  },
  {
    title: "Twitter",
    url: "#",
    icon: twitter,
  },
  {
    title: "Pinterest",
    url: "#",
    icon: pinterest,
  },
  {
    title: "Instagram",
    url: "#",
    icon: instagram,
  },
];
const Footer = (props: Props) => {
  return (
    <div className="flex flex-col laptop:flex-row bg-dark-blue w-full laptop:py-16">
      <div className="w-full flex justify-center items-center laptop:items-start laptop:w-[40%] h-[6em] laptop:h-auto">
        <img src={logo} alt="Shortly" className="h-[3em]" />
      </div>
      <div className="flex flex-col laptop:flex-row laptop:justify-around gap-8 w-full laptop:w-[40%]">
        {items.map((item) => (
          <div className="flex flex-col gap-6 laptop:gap-2" key={item.title}>
            <h1 className="text-center laptop:text-start text-2xl text-white">
              {item.title}
            </h1>
            <ul className="flex gap-3 laptop:gap-4 flex-col  text-center laptop:text-start">
              {item.items.map((elt) => (
                <Link key={elt.title} to={elt.url}>
                  {" "}
                  <li className="hover:text-primary font-bold text-xl text-gray-violet">
                    {elt.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full  laptop:w-[20%] ">
        {
          <ul className="flex w-full  gap-8 justify-center py-8 laptop:py-0 items-center">
            {socialConnect.map((item) => (
              <li className="overflow-hidden " key={item.title}>
                <Link
                  key={item.title}
                  to={item.url}
                  className="hover:bg-primary rounded-full overflow-hidden"
                >
                  <img key={item.title} className="bg-transparent" alt={item.title} src={item.icon} />
                </Link>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default Footer;
