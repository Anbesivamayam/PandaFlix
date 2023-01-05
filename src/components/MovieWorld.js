import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";

const MovieWorld = ({
  popularMovies,
  setPopularMovies,
  topRated,
  setTopRated,
  nowPlaying,
  upcoming,
  setNowPlaying,
  setUpcoming,
  loading,
  setLoading
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [boolean, setBoolean] = useState(true);

  // const updateWindowWidth = () => {
  //   setWindowWidth(window.innerWidth);
  //   // if (windowWidth >= "490") {
  //   //   setBoolean(true);
  //   // } else {
  //   //   setBoolean(false);
  //   // }
  // };
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth(window.innerWidth));
    // console.log(windowWidth);
    console.log(topRated);
  });

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
        `https://api.themoviedb.org/3/movie/top_rated?api_key=f870259c0e2838b7a85074234dc46809&language=en-US&page=1`
      )
      .then((response) => {
        setTopRated(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
 
    <div className="h-full text-black dark:text-white dark:font-normal font-semibold ">
      <section className="">
        {console.log(window.innerWidth)}
        <Carousel
          showThumbs={false}
          autoPlay={true}
          autoFocus={true}
          transitionTime={6}
          infiniteLoop={true}
          showStatus={false}
          hideArrow={false}
          showIndicators={false}
        >
          {nowPlaying.map((data, index) => (
            <div
              key={index}
              className=" relative w-full text-white cursor-pointer "
              onClick={() => {
                // navigate(`/movie/${data.id}`);
                navigate(`*`);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`}
                alt="title"
                className="w-full h-full pb-16 md:pb-3 dark:opacity-[0.4] dark:animate-pulse "
              />
              <div className="mx-auto px-6 md:px-10 pb-8 md:pb-2 flex flex-col text-start absolute bottom-8 ">
                <p className="text-2xl md:text-3xl lg:text-7xl">
                  {data.original_title}
                </p>
                <p className="hidden md:flex text-xs py-2 md:text-base lg:text-xl tracking-wide dark:font-light">
                  {data.overview}
                </p>
                <p className="text-xs md:text-base lg:text-xl">
                  Released Date: {data.release_date}
                </p>
                <p className="flex justify-start items-center  md:py-2 text-xs  md:text-base lg:text-xl">
                  Rating : {data.vote_average}{" "}
                  <span className="ml-1">
                    <AiFillStar size={24} className="text-yellow-400" />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <main>
        <section>
          <h3 className="px-5 py-3">Upcoming Movies</h3>
          <main className="flex pb-2  px-5 gap-2 overflow-x-auto scrollbar">
            {upcoming.map((movie, index) => {
              return <Movies key={index} {...movie} />;
            })}
          </main>
        </section>
        <section>
          <h3 className="px-5 py-3">Now Playing</h3>
          <main className="flex pb-5  px-5 gap-2 overflow-x-auto scrollbar">
            {nowPlaying.map((movie, index) => {
              return <Movies key={index} {...movie} />;
            })}
          </main>
        </section>
        <section>
          <h3 className="px-5 py-3">Top Rated</h3>
          <main className=" flex pb-5 px-5 gap-2 overflow-x-auto scrollbar">
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
  </>);
};

export default MovieWorld;
