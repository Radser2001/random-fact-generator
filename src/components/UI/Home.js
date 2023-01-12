import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RandomFact from "../Facts/RandomFact";

const Home = () => {
  const options = {
    method: "GET",
    url: "https://numbersapi.p.rapidapi.com/random/trivia",
    params: { min: "10", max: "20", fragment: "true", json: "true" },
    headers: {
      "X-RapidAPI-Key": "ecf4a50be8mshc5561d86e64db21p139d08jsnde3ca57b054e",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };
  const {
    data: numberFact,
    isLoading,
    refetch,
  } = useQuery(["number"], () => {
    return axios
      .request(options)
      .then(function (response) {
        console.log(response.data.text);

        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <div className="flex flex-col justify-center items-center font-MuseoModerno">
      <h1 className="mt-2 md:mt-12 text-white text-5xl md:text-7xl font-bold text-center">
        Random Fact Generator
      </h1>
      <p className="text-center mt-2 text-white text-2xl font-semibold">
        Generate Interesting Facts About Numbers
      </p>
      <div className="mt-1">
        <RandomFact
          numberFact={numberFact?.text}
          number={numberFact?.number}
          isLoading={isLoading}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default Home;
