import React, { useState } from "react";
import logo from "../../assest/images/logo.svg";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const navList = [
  {
    item: "Features",
    link: "/",
  },
  {
    item: "Pricing",
    link: "/",
  },
  {
    item: "Resources",
    link: "/",
  },
];
const Navbar = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {" "}
      <div className="tablet:py-4 p-4 tablet:p-0 flex h-[10vh] w-full tablet:px-48 laptop:px-48 items-center justify-between">
        <div className="w-fit  flex items-center ">
          <div className="w-fit">
            <img src={logo} alt="Shortly" className="h-8 laptop:h-12" />
          </div>
          <ul className="hidden tablet:flex gap-8  mx-8">
            {navList.map((item) => (
              <li
                key={item.item}
                className="hover:text-dark-blue font-semibold text-2xl text-gray-violet"
              >
                <Link to={item.link}>{item.item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="tablet:hidden w-fit" onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon
            icon={faBars}
            size={"2x"}
            color="hsl(257, 7%, 63%)"
          />
        </div>
        <div className="hidden tablet:flex gap-4  ">
          <Button
            text="Login"
            style={`font-semibold text-2xl text-gray-violet rounded-full text-gray tablet:w-[6em] px-4 p-2 hover:bg-primary  hover:text-white`}
          />
          <Button
            text="Sign up"
            style={`font-semibold text-2xl rounded-full tablet:w-[6em] px-4 p-2 bg-primary  text-white`}
          />
        </div>
      </div>
      {toggle && (
        <div className=" flex tablet:hidden w-full   items-center justify-between  p-4">
          <ul className="flex tablet:hidden flex-col items-center w-full rounded-xl gap-6  bg-primary-dark p-4">
            {navList.map((item) => (
              <li key={item.item} className=" font-bold  text-2xl text-white">
                <Link to={item.link} onClick={() => setToggle(!toggle)}>
                  {item.item}
                </Link>
              </li>
            ))}{" "}
            <li className="border-t-2 border-gray-violet   w-full"></li>
            <li
              className=" w-full flex justify-center "
              onClick={() => setToggle(!toggle)}
            >
              <Button
                text="Login"
                style={`font-semibold text-2xl w-full rounded-full text-gray px-4 p-2 hover:bg-primary  hover:text-white`}
              />
            </li>
            <li
              className="w-full flex justify-center "
              onClick={() => setToggle(!toggle)}
            >
              {" "}
              <Button
                text="Signup"
                style={`font-semibold text-2xl w-[100%] rounded-full  px-4 p-2 bg-primary  text-white`}
              />
            </li>
          </ul>{" "}
        </div>
      )}
    </div>
  );
};

export default Navbar;
