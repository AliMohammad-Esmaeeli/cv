"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, Dispatch, SetStateAction } from "react";
import data from "@/Data/data.json";
type propstype = {
  Lang: string;
};

export default function Nav(props: propstype) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  return (
    <div>
      <header className="p-3">
        <nav className="flex justify-between items-center lg:justify-end">
          <div className="flex justify-center items-center">
            {/* choise mode */}
            {/* <div className="h-8 w-14 rounded-full bg-slate-200 mx-2 relative">
              <span className=" flex items-center justify-around mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-black"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div
                className="rounded-full h-6 w-6 bg-white top-1 ms-1 absolute"
                onClick={(div) => {
                  if (div.currentTarget.classList.contains("ms-1")) {
                    div.currentTarget.classList.remove("ms-1");
                    div.currentTarget.classList.add("ms-7");
                  } else {
                    div.currentTarget.classList.remove("ms-7");
                    div.currentTarget.classList.add("ms-1");
                  }
                }}
              ></div>
            </div> */}
            {/* choise lang */}
            <button
              onClick={() => setIsLangOpen(isLangOpen === false ? true : false)}
              className="rounded-lg p-2 mx-2 bg-orange-400 text-black text-base truncate flex items-center relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                className="vt-locales-btn-icon w-5 h-5 mr-1"
                data-v-9b573068=""
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                  className="css-c4d79v"
                ></path>
              </svg>
              {props.Lang === "Fa" ? data.Fa.chioseLang : data.En.chioseLang}
            </button>
            {isLangOpen && (
              <ul className="h-24 w-40 bg-slate-50 rounded-3xl absolute top-16 md:top-14 z-10 grid place-items-center">
                <li>
                  <Link
                    className="flex justify-center items-center text-black"
                    href={"/"}
                  >
                    فارسی
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex justify-center items-center text-black"
                    href={"/en"}
                  >
                    English
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* links */}
          <div className="hidden md:block">
            <div className="text-2xl flex items-center justify-center">
              <a
                className=" mx-1 px-1 order-1"
                href="https://virgool.io/@AliMohammad"
              >
                {props.Lang === "Fa" ? data.Fa.article : data.En.article}
              </a>
              <Link href="#about-me" className=" mx-1 px-1 order-2">
                {props.Lang === "Fa"
                  ? data.Fa["about me"]
                  : data.En["about me"]}
              </Link>
              <Link href="#contact" className=" mx-1 px-1 order-3">
                {props.Lang === "Fa" ? data.Fa.contact : data.En.contact}
              </Link>
            </div>
          </div>
          <button
            onClick={() => setIsNavOpen(isNavOpen === false ? true : false)}
            className="block md:hidden m-3 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {isNavOpen && (
              <ul className="bg-slate-100 text-black text-2xl h-36 w-52 p-5 absolute top-10 -right-4 z-10 rounded-3xl grid grid-rows-3 place-items-center">
                <div className="h-3 w-3 bg-slate-100 absolute ml-36 mb-36 rotate-45"></div>
                <li className="order-1">
                  <Link href="/blogs">
                    {props.Lang === "Fa" ? data.Fa.article : data.En.article}
                  </Link>
                </li>
                <li className="order-2">
                  <Link href="#about-me">
                    {props.Lang === "Fa"
                      ? data.Fa["about me"]
                      : data.En["about me"]}
                  </Link>
                </li>
                <li className="order-3">
                  <Link href="#contact">
                    {props.Lang === "Fa" ? data.Fa.contact : data.En.contact}
                  </Link>
                </li>
              </ul>
            )}
          </button>
        </nav>
      </header>
    </div>
  );
}
