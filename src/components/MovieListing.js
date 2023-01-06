import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../features/movieSlice";
import MovieCard from "./MovieCard";
import SeriesCard from "./SeriesCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  return (
    <div className={`${movies.length >= 0 ? "h-screen" : "h-full"}`}>
      <main className="">
        <main>
          <h2 className="mx-auto px-6 xl:px-8 py-4 xl:py-6 text-bold text-2xl font-medium text-black dark:text-white dark:bg-[#0E0F11] bg-[#F7F7F7]">
            Movies List
          </h2>
        </main>
        <section
          className="mx-auto px-5 py-2 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 dark:bg-[#0E0F11] 
          bg-[#F7F7F7] justify-center gap-4 h-full"
        >
          {movies.Response === "True" &&
            movies.Search.map((movie, index) => {
              return (
                <div key={index} >
                  <MovieCard key={index} data={movie} />
                </div>
              );
            })}
        </section>
        {movies.Response === "False" && (
          <div className="flex justify-center flex-col px-6 py-2 md:flex-row items-center gap-6 text-center dark:text-white text-black ">
            <h3 key={movies.Error} className="text-base md:text-xl bounce" >{movies.Error}....</h3>
            <img
              className="w-96 rounded-lg"
              src={
                "https://cdn.dribbble.com/users/244516/screenshots/15180098/media/35301f78c0ba0d242a6703b927814e23.gif"
              }
              alt="image"
            />
          </div>
        )}

        <main>
          <h2 className="mx-auto px-6 xl:px-8 py-4 xl:py-8 texttext-bold text-2xl font-medium text-black dark:text-white dark:bg-[#0E0F11] bg-[#F7F7F7]">
            Series List
          </h2>
        </main>

         <section
          className="mx-auto px-5 py-2 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 dark:bg-[#0E0F11] bg-[#F7F7F7]
       justify-center gap-4 h-full"
        >
          {series.Response === "True" &&
            series.Search.map((movie, index) => {
              return (
                <div key={index} >
                  <SeriesCard key={index} data={movie} />
                </div>
              );
            })}
        </section>
        {series.Response === "False" && (
          <div className="flex flex-col-reverse px-6 py-2 md:flex-row justify-center items-center gap-6 text-center dark:text-white text-black 
          pb-7 xl:pb-32 h-full ">
            <img
              className="w-96 rounded-lg"
              src={
                "https://cdn.dribbble.com/users/77598/screenshots/16399264/media/d86ceb1ad552398787fb76f343080aa6.gif"
              }
              alt="image"
            />
            <h3 key={series.Error} className="text-base md:text-xl bounce">{series.Error}....</h3>
          </div>
        )}
      </main>
    </div>
  );
};

export default MovieListing;
{
  /* <main>
       {movies.Search.map ((movie,index)=> (
         <MovieCard key={index} data={movie} />
       ))}
      </main> */
}
