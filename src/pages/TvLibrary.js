import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";
import { Navigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiFillStar } from "react-icons/ai";

const TvLibrary = () => {
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=f870259c0e2838b7a85074234dc46809&language=en-US&page=1`
      )
      .then((response) => {
        setTopRatedSeries(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
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
          {topRatedSeries.map((data, index) => (
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
                  {data.name}
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
          <h3 className="px-5 py-3">Popular Series</h3>
          <main className="flex pb-2  px-5 gap-2 overflow-x-auto scrollbar">
            {topRatedSeries.map((movie, index) => {
              return <Movies key={index} {...movie} />;
            })}
          </main>
    </section>

    </div>
  )
}

export default TvLibrary