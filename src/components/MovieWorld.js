import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import axios from "axios";

const MovieWorld = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f870259c0e2838b7a85074234dc46809&language=en-US&page=1`
      )
      .then((response) => {
        setPopularMovies(response.data.results);
     
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <div className="h-full">
      {console.log(popularMovies)}
      <p className="text-white text-center text-6xl py-8">MovieWorld</p>
      <h3 className="text-white">Popular Movies</h3>
      <main className="text-white flex pb-5 px-5 gap-2 overflow-x-auto">
        
        {popularMovies.map((movie, index) => {
          return <Movies key={index} {...movie} />;
        })}
      </main>
    </div>
  );
};

export default MovieWorld;
