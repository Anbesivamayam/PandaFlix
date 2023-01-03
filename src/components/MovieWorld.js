import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

import { data } from "autoprefixer";

const MovieWorld = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  // Upcoming Movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=f870259c0e2838b7a85074234dc46809&language=en-US&page=1`
      )
      .then((response) => {
        setUpcoming(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Now Playing Movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=f870259c0e2838b7a85074234dc46809&language=en-US&page=1`
      )
      .then((response) => {
        setNowPlaying(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Popular Movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f870259c0e2838b7a85074234dc46809&language=en-US&page=2`
      )
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Top rated
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=f870259c0e2838b7a85074234dc46809&language=en-US&page=1`
      )
      .then((response) => {
        setTopRated(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="h-full text-white">
      {console.log(nowPlaying)}
      {/* {JSON.stringify(nowPlaying.poster_path)} */}
      <section className="">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          autoFocus={true}
          transitionTime={6}
          infiniteLoop={true}
          showStatus={false}
          hideArrow={false}
          showDots={false}
        >
          {/* <main className=""> */}
          {nowPlaying.map((data, index) => (
            <div key={index} className=" relative w-full text-white">
              <img
                src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`}
                alt="title"
                className="w-full h-full pb-10 md:pb-3 opacity-[0.4] "
              />
              <div className="mx-auto px-10 flex flex-col text-start absolute bottom-7 ">
                <p className="text-2xl md:text-7xl"> {data.original_title}</p>
                <p className="text-2xl py-2 md:text-xl tracking-wide font-light">
                  {data.overview}
                </p>
                <p className="text-2xl py-2 md:text-xl ">
                  Released Date: {data.release_date}
                </p>
                <p className="flex justify-start items-center text-2xl py-2 md:text-xl">
                  Rating : {data.vote_average}{" "}
                  <span className="">
                    <AiFillStar className="text-yellow-400" />
                  </span>
                </p>
              </div>
            </div>
          ))}
          {/* </main> */}
        </Carousel>
      </section>
      {/* {Rendered movies} */}
      <main>
        <section>
          <h3 className="px-5 py-3">Upcoming Movies</h3>
          <main className="flex pb-2 px-5 gap-2 overflow-x-auto scrollbar">
            {upcoming.map((movie, index) => {
              return <Movies key={index} {...movie} />;
            })}
          </main>
        </section>
        <section>
          <h3 className="px-5 py-3">Now Playing</h3>
          <main className="flex pb-5 px-5 gap-2 overflow-x-auto scrollbar">
            {nowPlaying.map((movie, index) => {
              return <Movies key={index} {...movie} />;
            })}
          </main>
        </section>
        <section>
          <h3 className="px-5 py-3">Top Rated</h3>
          <main className="text-white flex pb-5 px-5 gap-2 overflow-x-auto scrollbar">
            {topRated.map((movie, index) => {
              return <Movies key={index} {...movie} />;
            })}
          </main>
        </section>
        <section>
          <h3 className="px-5 py-3">Popular Movies</h3>
          <main className="flex pb-5 px-5 gap-2 overflow-x-auto scrollbar">
            {popularMovies.map((movie, index) => {
              return <Movies key={index} {...movie} />;
            })}
          </main>
        </section>
      </main>
    </div>
  );
};

export default MovieWorld;
