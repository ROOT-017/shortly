import React from "react";

type Props = {
  text: string;
  style: string;
};

const Button = ({ text, style }: Props) => {
  return <button className={style}>{text}</button>;
};

export default Button;
