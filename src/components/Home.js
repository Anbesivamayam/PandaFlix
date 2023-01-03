import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import axios from "axios";
import movieApi from "../api/movieApi";
import { APIKey, name } from "../api/MovieApiKey";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovies,
  addSeries,
  searchAllInfo,
  searchAllInfo_Value,
} from "../features/movieSlice";

const Home = () => {
  const search = useSelector(searchAllInfo_Value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`?apiKey=${APIKey}&s=${search}&type=movie`)
      .then((res) => {
        console.log(res.data);
        dispatch(addMovies(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);
  useEffect(() => {
    axios
      .get(`?apiKey=${APIKey}&s=${search}&type=series`)
      .then((res) => {
        dispatch(addSeries(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);
  return (
    <div className="h-screen">
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
