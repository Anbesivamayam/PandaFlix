import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";
import { Navigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiFillStar } from "react-icons/ai";
import DetailMovieCard from "../components/DetailMovieCard";

const MovieLibrary = ({upcoming, setUpcoming}) => {


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
  return  (
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
          {upcoming.map((data, index) => (
            <div
              key={index}
              className=" relative w-full text-white cursor-pointer "
              onClick={() => {
                // navigate(`/movie/${data.id}`);
                Navigate(`*`);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`}
                alt="title"
                className="w-full h-full pb-16 md:pb-3 dark:opacity-[0.4] "
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
    <section>
          <h3 className="px-5 py-3">Upcoming Movies</h3>
          <main className="flex pb-2  px-5 gap-2 overflow-x-auto scrollbar">
            {upcoming.map((movie, index) => {
              return <Movies key={index} {...movie} />;
            })}
          </main>
    </section>
    <section>
          <h3 className="px-5 py-3"> All Movies </h3>
          <main className="grid grid-col-2 md:grid-col-4 lg:grid-cols-5 pb-6 gap-4 mx-auto px-8 ">
            {upcoming.map((movie, index) => {
              return <DetailMovieCard key={index} {...movie} />;
            })}
          </main>
    </section>

    </div>
  )
};

export default MovieLibrary;
