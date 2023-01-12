import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RandomFact from "../Facts/RandomFact";

const Home = () => {
  const { data: numberFact } = useQuery(["number"], () => {
    return axios.get(`http://numbersapi.com/random`).then((res) => res.data);
  });

  return (
    <div className="flex flex-col justify-center items-center font-MuseoModerno">
      <h1 className="mt-12 text-white text-5xl md:text-7xl font-bold text-center">
        Random Fact Generator
      </h1>
      <p className="text-center mt-2 text-white text-2xl font-semibold">
        Generate Interesting Facts About Numbers
      </p>
      <div className="mt-3">
        <RandomFact numberFact={numberFact} />
      </div>
    </div>
  );
};

export default Home;
