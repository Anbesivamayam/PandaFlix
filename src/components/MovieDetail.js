import axios from "axios";
import React, { useEffect } from "react";
import { APIKey } from "../api/MovieApiKey";
import { useDispatch, useSelector } from "react-redux";
import { showAllInfo, showImdbInfo } from "../features/movieSlice";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const imdbInfo = useSelector(showAllInfo);
  console.log(imdbInfo);

  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf("/") + 1);
  console.log(id);

  useEffect(() => {
    axios
      .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
      .then((res) => {
        // console.log(res.data);
        dispatch(showImdbInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-black h-screen">
      <main className="mx-auto px-7 py-4 flex justify-center items-center  text-white">
        <section className="flex flex-col gap-3">
          <h2 className="text-3xl">{imdbInfo.Title}</h2>
          <div className="flex gap-2">
            <p> IMDB rating : {imdbInfo.imdbRating}</p>
            <p> IMDB Votes : {imdbInfo.imdbVotes}</p>
            <p> Metascores : {imdbInfo.Metascore}</p>
            <p> Runtime : {imdbInfo.Runtime}</p>
            <p> Released on : {imdbInfo.Released}</p>
            <p> Rated : {imdbInfo.Rated}</p>
          </div>
          <div>
            <p>{imdbInfo.Plot}</p>
          </div>
          <div>
            <p>Director : {imdbInfo.Director}</p>
            <p>Writer : {imdbInfo.Writer}</p>
            <p>Stars : {imdbInfo.Actors}</p>
            <p>Generes : {imdbInfo.Genre}</p>
            <p>Language : {imdbInfo.Language}</p>
            <p>Awards : {imdbInfo.Awards}</p>
            <p>Box office : {imdbInfo.BoxOffice}</p>
            <p>Country : {imdbInfo.Country}</p>
          </div>
        </section>
        <section className="w-full">
          <img src={imdbInfo.Poster} alt={imdbInfo.title} className="w-5/6" />
        </section>
      </main>
    </div>
  );
};

export default MovieDetail;
