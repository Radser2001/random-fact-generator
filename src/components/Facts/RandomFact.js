import React from "react";

const RandomFact = ({ numberFact }) => {
  return (
    <div className="font-MuseoModerno w-full">
      <div className=" max-w-sm rounded overflow-hidden mt-12 bg-white shadow-lg">
        <div className="px-6 py-4 ">
          <p className="text-gray-700 text-center  text-2xl">{numberFact}</p>
        </div>
      </div>
    </div>
  );
};

export default RandomFact;
