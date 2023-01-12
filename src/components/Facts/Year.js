import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const Year = () => {
  const [number, setNumber] = useState(2050);

  const { data: numberFact, refetch } = useQuery(["number"], () => {
    return axios
      .get(`http://numbersapi.com/${number}/year`)
      .then((res) => res.data);
  });
  const setFactNumber = (event) => {
    setNumber(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center font-MuseoModerno">
      <h1 className="mb-12 text-white text-5xl md:text-6xl font-semibold">
        Year
      </h1>
      <div className="border-b  py-2 border-teal-500">
        <input
          className="appearance-none text-xl border-none  shadow-lg rounded p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={setFactNumber}
          type="text"
          value={number}
        ></input>

        <button
          onClick={refetch}
          className="p-4 text-white border-none bg-cyan-400 shadow-lg rounded-md ml-3 hover:cursor-pointer"
        >
          Generate
        </button>
      </div>
      <div className="max-w-sm  rounded overflow-hidden mt-12 bg-white shadow-lg">
        <div className="px-6 py-4">
          <p className="text-gray-700 text-center text-2xl">{numberFact}</p>
        </div>
      </div>
    </div>
  );
};

export default Year;
