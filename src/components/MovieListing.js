import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../features/movieSlice";
import MovieCard from "./MovieCard";
import SeriesCard from "./SeriesCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  return (
    <div className="">
      <main>
        <h2 className="mx-auto px-6 py-4 text-bold text-2xl font-medium text-black dark:text-white dark:bg-[#0E0F11] bg-[#F7F7F7]">
          Movies List
        </h2>
      </main>
      <section
        className="mx-auto px-5 py-2 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 dark:bg-[#0E0F11] bg-[#F7F7F7]
       justify-center gap-4"
      >
        {movies.Response === "True" ? (
          movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />;
          })
        ) : (
          <div className="text-white ">
            <h3 className="text-center">{movies.Error}</h3>
          </div>
        )}
      </section>
      <main>
        <h2 className="mx-auto px-6 py-4 text-bold text-2xl font-medium text-black dark:text-white dark:bg-[#0E0F11] bg-[#F7F7F7]">
          Series List
        </h2>
      </main>
      <section
        className="pb-2 mx-auto p-3 py-4 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center 
      justify-center gap-4 bg-[#F3F3F3] dark:bg-[#0E0F11] "
      >
        {series.Response === "True" ? (
          series.Search.map((series, index) => {
            return <SeriesCard key={index} data={series} />;
          })
        ) : (
          <div className="text-white">
            <h3 className="text-center">{series.Error}</h3>
          </div>
        )}
      </section>
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
