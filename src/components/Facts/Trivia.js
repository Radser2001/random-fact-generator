import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const Trivia = () => {
  const [number, setNumber] = useState(112);

  const options = {
    method: "GET",
    url: "https://numbersapi.p.rapidapi.com/42/trivia",
    params: { fragment: "true", notfound: "floor", json: "true" },
    headers: {
      "X-RapidAPI-Key": "ecf4a50be8mshc5561d86e64db21p139d08jsnde3ca57b054e",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  const {
    data: numberFact,
    refetch,
    isLoading,
  } = useQuery(["number"], () => {
    return axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  });
  const setFactNumber = (event) => {
    setNumber(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center font-MuseoModerno">
      <h1 className="mb-12 text-white text-5xl md:text-6xl font-semibold">
        Trivia
      </h1>
      <div className="border-b  py-2 border-teal-500">
        <input
          className="appearance-none text-xl  border-none  shadow-lg rounded p-2 md:p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={setFactNumber}
          type="text"
          value={number}
        ></input>

        <button
          onClick={refetch}
          className="p-3 md:p-4 text-white border-none bg-cyan-400 shadow-lg rounded-md ml-1 md:ml-3 hover:cursor-pointer"
        >
          Generate
        </button>
      </div>

      <div className="max-w-sm  rounded overflow-hidden mt-12 bg-white shadow-lg">
        <div className="px-6 py-4">
          <p className="text-gray-700 text-center text-2xl">
            {isLoading ? "Loading..." : `${number} is ${numberFact.text}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trivia;
