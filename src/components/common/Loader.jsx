import React, { Fragment } from "react";

export default function Loader() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md sm:w-[20%] w-full">
        <div className="text-center space-y-4 mb-8 animate-pulse">
          <div className="w-24 h-24 bg-gray-300 mx-auto rounded-full"></div>
          <div className="w-16 h-16 bg-gray-300 mx-auto rounded-full"></div>
          <div className="h-12 bg-gray-300 mx-auto rounded-md w-32"></div>
          <div className="h-6 bg-gray-300 mx-auto rounded-md w-40"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 mx-auto rounded-md w-32"></div>
            <div className="h-4 bg-gray-300 mx-auto rounded-md w-28"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="bg-[#f7f6f9] w-full p-6 rounded-2xl shadow-md">
          <Fragment>
            <h1 className="text-[24px] px-5 pt-5 text-[#333]">
              Last 3 Day's Forecast
            </h1>
            <div className="w-full flex items-center justify-between p-5 flex-wrap mobile:gap-y-5">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gradient p-4 rounded-xl shadow-md sm:w-[30%] w-full bg-gray-300 animate-pulse bg-no-repeat bottom-0 text-white bg-cover"
                >
                  <div className="h-6 bg-gray-400 rounded-md mb-2"></div>
                  <div className="h-4 bg-gray-400 rounded-md mb-4 w-3/4"></div>
                  <div className="flex items-center justify-center my-4">
                    <div className="h-12 w-12 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="h-6 bg-gray-400 rounded-md mb-4"></div>
                  <div className="h-4 bg-gray-400 rounded-md w-2/3"></div>
                </div>
              ))}
            </div>
          </Fragment>
          <div className="mt-6 space-y-4">
            <div className="h-6 bg-gray-300 rounded-md w-1/3"></div>
            <div className="grid md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-300 rounded-xl shadow-md h-24"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
