import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-2 mb-12 w-full font-MuseoModerno">
      <div className="">
        <Link
          className="text-2xl p-2 lg:p-10 w-full no-underline text-white"
          to="/"
        >
          Home
        </Link>
        <Link
          className=" text-2xl p-2 lg:p-10 w-full no-underline text-white"
          to="/math"
        >
          Math
        </Link>
        <Link
          className="text-2xl p-2 lg:p-10 w-full no-underline text-white"
          to="/trivia"
        >
          Trivia
        </Link>
        <Link
          className="text-2xl p-2 lg:p-10 w-full no-underline text-white"
          to="/year"
        >
          Year
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
