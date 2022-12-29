import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../features/movieSlice";
import MovieCard from "./MovieCard";
import SeriesCard from "./SeriesCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  // console.log("Fetching all movies",movies);

  return (
    <div>
      <main>
        <h2 className="text-bold text-xl px-2 py-2 text-white bg-gray-900">
          Movie List
        </h2>
      </main>
      <section className=" bg-gray-900  mx-auto p-3 py-4 w-full grid md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-4">
        {movies.Response === "True" ? (
          movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />;
          })
        ) : (
          <div>
            <h3 className="text-center">{movies.Error}</h3>
          </div>
        )}
      </section>
      <h2 className="text-bold text-xl px-2 py-2 text-white bg-gray-900">
        Series List
      </h2>
      <section className=" bg-gray-900 pb-2 mx-auto p-3 py-4 w-full grid md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-4">
        {series.Response === "True" ? (
          series.Search.map((series, index) => {
            return <SeriesCard key={index} data={series} />;
          })
        ) : (
          <div>
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
