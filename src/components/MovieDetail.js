import axios from "axios";
import React, { useEffect } from "react";
import { APIKey } from "../api/MovieApiKey";
import { useDispatch, useSelector } from "react-redux";
import { showAllInfo, showImdbInfo } from "../features/movieSlice";
import Error404 from "../images/vadivel.jpg";
import { FcRating } from "react-icons/fc";
import { GoThumbsup } from "react-icons/go";
import { MdCreditScore } from "react-icons/md";
import { RiMovieFill } from "react-icons/ri";
import { AiFillCalendar } from "react-icons/ai";
import { FaChild } from "react-icons/fa";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const imdbInfo = useSelector(showAllInfo);
  // console.log(imdbInfo);

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
    <div className="bg-[#0E0F11] w-full ">
      <main className="mx-auto flex flex-col-reverse gap-3 px-6 py-7 md:px-8 md:py-12 xl:py-16 md:grid md:grid-cols-4 items-center justify-center text-white">
        <section className="p-3 rounded-xl shadow-xl flex flex-col justify-center col-span-3 gap-3 font-light bg-[#151619]">
          <h2 className="text-2xl py-2 md:text-5xl xl:text-6xl tracking-normal">
            {imdbInfo.Title}
          </h2>
          <div className="flex flex-wrap py-1 gap-2 tracking-wide xl:text-xl">
            <p className="flex justify-center font-medium text-yellow-500 ">
              <span className="miniTitle">
                IMDB rating <FcRating />:
              </span>
              {imdbInfo.imdbRating}
            </p>
            <p className="flex justify-center items-center font-medium text-yellow-500">
              <span className="miniTitle">
                IMDB Votes <GoThumbsup />:
              </span>
              {imdbInfo.imdbVotes}
            </p>
            <p className="flex  justify-center items-center font-medium text-yellow-500">
              <span className="miniTitle">
                Metascores <MdCreditScore />:
              </span>
              {imdbInfo.Metascore}
            </p>
            <p className="flex justify-center items-center font-medium text-yellow-500">
              <span className="miniTitle">
                Runtime <RiMovieFill />:
              </span>
              {imdbInfo.Runtime}
            </p>
            <p className="flex justify-center items-center font-medium text-yellow-500">
              <span className="miniTitle">
                Released Date <AiFillCalendar />:
              </span>
              {imdbInfo.Released}
            </p>
            <p className="flex justify-center items-center font-medium text-yellow-500">
              <span className="miniTitle">
                Rating <FaChild />:
              </span>
              {imdbInfo.Rated}
            </p>
          </div>
          <div className="leading-7 xl:leading-10 tracking-wide text-sm md:text-base xl:text-xl">
            <p>{imdbInfo.Plot}</p>
          </div>
          <div className="flex flex-col gap-3 xl:gap-7 xl:py-8 ">
            <p className="subTitle ">
              Director
              <span className="text-white font-normal">
                : {imdbInfo.Director}
              </span>
            </p>
            <p className="subTitle">
              Writer
              <span className="text-white font-normal">
                : {imdbInfo.Writer}
              </span>
            </p>
            <p className="subTitle">
              Stars
              <span className="text-white font-normal">
                : {imdbInfo.Actors}
              </span>
            </p>
            <p className="subTitle">
              Generes
              <span className="text-white font-normal">: {imdbInfo.Genre}</span>
            </p>
            <p className="subTitle">
              Language
              <span className="text-white font-normal">
                : {imdbInfo.Language}
              </span>
            </p>
            <p className="subTitle">
              Awards
              <span className="text-white font-normal">
                : {imdbInfo.Awards}
              </span>
            </p>
            <p className="subTitle">
              Box office
              <span className="text-white font-normal">
                : {imdbInfo.BoxOffice}
              </span>
            </p>
            <p className="subTitle">
              Country
              <span className="text-white font-normal">
                : {imdbInfo.Country}
              </span>
            </p>
          </div>
        </section>
        <section className="w-full flex justify-center items-center p-2 h-full shadow-2xl ">
          <img
            src={imdbInfo.Poster === "N/A" ? Error404 : imdbInfo.Poster}
            alt={imdbInfo.title}
            className="w-full "
          />
        </section>
      </main>
    </div>
  );
};

export default MovieDetail;
