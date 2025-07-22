import React from "react";
import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav className="flex flex-row justify-between items-center w-full mb-8 bg-gray-200 px-30">
      {/* left side  */}
      <div className="flex flex-1 p-2 justify-between">
        <Link to={"/"} className="p-2">
          LOGO
        </Link>

        <div className="flex gap-2 mr-5">
          <Link className="p-2" to={"/"}>
            Home
          </Link>
          <Link className="p-2" to={"/about"}>
            About
          </Link>
          <Link className="p-2" to={"/weather"}>
            Weather
          </Link>
        </div>
      </div>
      {/* right side  */}
      <div className="flex p-2">
        <div className="flex gap-2 border-[0.5px] border-gray-500 rounded-[5px]">
          <Link to={"/auth/register"} className="p-2 ">
            Register
          </Link>
          <Link to={"/auth/login"} className="p-2 bg-blue-400">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
