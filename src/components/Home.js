import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import axios from "axios";
import movieApi from "../api/movieApi";
import { APIKey, name } from "../api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../features/movieSlice";

const Home = () => {
  const movieText = name;
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .then((res) => {
        dispatch(addMovies(res.data));
        // console.log("API response", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;

// extras
// const APIKey = "6ad55be2";
// const baseLink = "http://www.omdbapi.com/";
// axios.defaults.baseURL = baseLink;
// useEffect(() => {
//   const movieText = "Avatar";
//   const fetchMovies = async () => {
//     const response = await movieApi
//       .get(`?apikey=${APIKey}&s=${movieText}$type=movie`)
//       .then((res) => console.log("the API response ", res))
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   fetchMovies();
// }, []);
