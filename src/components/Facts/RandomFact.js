import React from "react";

const RandomFact = ({ numberFact, isLoading, refetch }) => {
  return (
    <div className="font-MuseoModerno w-full">
      <div className=" max-w-sm rounded overflow-hidden mt-2 bg-white shadow-lg">
        <div className="px-6 py-4 ">
          <p className="text-gray-700 text-center  text-2xl">
            {isLoading ? "Loading..." : numberFact}
          </p>
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={refetch}
          className="p-4 text-white border-none bg-cyan-400 shadow-lg rounded-md ml-3 hover:cursor-pointer"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default RandomFact;
