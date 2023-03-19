import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <>
      <div className="flex justify-between mx-2 max-w-5xl sm:mx-auto items-center py-6">
        <div>
          <MenuItem title={"HOME"} address={"/"} Icon={AiFillHome} />
          <MenuItem
            title={"ABOUT"}
            address={"/about"}
            Icon={AiFillInfoCircle}
          />
        </div>
        <div className="flex items-center space-x-5">
          <DarkMode />
          <Link href="/">
            <h2 className="text-2xl">
              <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
                KNG
              </span>
              <span className="text-xl hidden sm:inline">SOUL</span>
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
