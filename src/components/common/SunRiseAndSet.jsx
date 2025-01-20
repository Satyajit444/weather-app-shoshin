import React from "react";
import {
  FaSun,
  FaMoon,
} from "react-icons/fa";
function SunRiseAndSet({sunrise,sunset}) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center text-sm mt-4">
        <FaSun className="mr-2 text-yellow-500" />{" "}
        {new Date(sunrise).toLocaleTimeString()}
      </div>
      <div className="flex items-center text-sm mt-4">
        <FaMoon className="mr-2 text-indigo-500" />{" "}
        {new Date(sunset).toLocaleTimeString()}
      </div>
    </div>
  );
}

export default SunRiseAndSet;
