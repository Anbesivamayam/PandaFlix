import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import axios from "axios";
import movieApi from "../api/movieApi";
import { APIKey, name } from "../api/MovieApiKey";
// import APIKey from "../api/MovieApiKey";

const Home = () => {
  // const APIKey = "6ad55be2";
  // const baseLink = "http://www.omdbapi.com/";
  // axios.defaults.baseURL = baseLink;
  // useEffect(() => {
  //   const movieText = "Avatar";
  //   const fetchMovies = async () => {
  //     const response = await axios
  //       .get(`?apikey=${APIKey}&s=${movieText}$type=movie`)
  //       .then((res) => console.log("the API response ", res))
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   fetchMovies();
  // }, []);

  useEffect(() => {
    const movieText = name;
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).then((res)=>{
        console.log("API response", res)
      }).catch((err)=>{
        console.log(err);
      })
    };
    fetchMovies()
  },[]);
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
