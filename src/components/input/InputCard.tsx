import React, { useEffect, useState } from "react";
import bgdeskstop from "../../assest/images/bg-boost-desktop.svg";
import bgmobile from "../../assest/images/bg-boost-mobile.svg";
import loading from "../../assest/images/icons8-loading.gif";
import axios from "axios";

type Props = {};

interface linkProps {
  link: string;
  shrtlnk: string;
}

/***
 * @text text to be copied
 * @returns boolean indicating whether the successfully copied or not
 */
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    return false;
  }
};
const Links = ({ link, shrtlnk }: linkProps) => {
  const [copy, setCopy] = useState(false);
  const buttonInnerStyle = {
    backgroundColor: copy ? " hsl(257, 27%, 26%)" : "hsl(180, 66%, 49%)",
  };
  return (
    <div className="flex flex-col tablet:flex-row rounded-lg tablet:items-center justify-between  bg-white w-full text-xl">
      <p
        className="text-dark-blue max-w-[375px] laptop:max-w-full font-bold border-b-2 laptop:border-none p-6 pb-2 border-background"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {link}
      </p>
      <div className="flex gap-4 tablet:items-center flex-col p-6 pt-2   w-full tablet:w-fit tablet:flex-row">
        <p className="text-primary font-bold py-2">{shrtlnk}</p>
        <button
          style={buttonInnerStyle}
          className=" rounded-md font-bold w-full tablet:w-fit py-2 px-6 text-white"
          onClick={async () => {
            const state = await copyToClipboard(shrtlnk);
            if (state) {
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 3000);
            } else {
              setCopy(false);
            }
          }}
        >
          {copy ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

const InputCard = (props: Props) => {
  const [error, setError] = useState<string | undefined>();
  const [link, setLink] = useState<string | undefined>();
  const [links, setLinks] = useState<
    | {
        url: string;
        shrtlnk: string;
        key: string;
      }[]
    | undefined
  >();
  const [deviceWidth, setDeviceWidth] = useState(window.innerHeight);
  const [isLoading, setIsloading] = useState(false);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (!link) {
      return setError("Please add a link");
    }

    setLink(link);
    setIsloading(true);
    const res = await axios({
      method: "post",
      url: "https://shrtlnk.dev/api/v2/link",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": process.env.REACT_APP_API_KEY,
      },
      data: {
        url: link,
      },
    });
    setIsloading(false);
    if (res.status === 201) {
      setLinks((state) => {
        if (state) {
          localStorage.setItem(
            "shrtlnks",
            JSON.stringify([res.data, ...state])
          );
          return [res.data, ...state];
        }
        localStorage.setItem("shrtlnks", JSON.stringify([res.data]));
        return [res.data];
      });
    }
  };
  useEffect(() => {
    const shrtlnks = localStorage.getItem("shrtlnks");
    if (shrtlnks) {
      let links = JSON.parse(shrtlnks) as {
        url: string;
        shrtlnk: string;
        key: string;
      }[];
      setLinks(links.reverse());
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex flex-col items-center tablet:px-48 px-8 bg-background w-full">
      <form
        onSubmit={handleFormSubmit.bind(this)}
        className=" w-full justify-center items-center  rounded-lg bg-primary-dark p-6 laptop:p-12 relative -top-16"
        style={{
          backgroundImage: `url(${deviceWidth > 390 ? bgdeskstop : bgmobile})`,
        }}
      >
        <div className="flex flex-col tablet:flex-row   gap-4">
          <input
            type="text"
            className={`text-xl px-8 py-4 w-full rounded-lg  outline-none border-2 ${
              error ? ` error` : ""
            }`}
            placeholder="Shorten a link here..."
            style={{
              borderColor: error ? "hsl(0, 87%, 67%)" : undefined,
            }}
            onChange={(e) => {
              setLink(e.target.value);
              setError(undefined);
            }}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary rounded-lg laptop:w-[12em] px-8 py-4   text-xl font-bold text-white"
          >
            {isLoading ? "Please wait..." : "Shorten It!"}
          </button>
        </div>
        {error && <p className="error italic">{error}</p>}
      </form>
      <div className="flex flex-col gap-6 w-full">
        {links &&
          links
            .reverse()
            .map((item, index) => (
              <Links key={index} link={item.url} shrtlnk={item.shrtlnk} />
            ))}
      </div>
    </div>
  );
};

export default InputCard;
