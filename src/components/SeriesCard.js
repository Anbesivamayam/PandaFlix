import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Error404 from "../images/vadivel.jpg";

const SeriesCard = ({ data }) => {
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/movie/${data.imdbID}`);
  };
  return (
    <div>
      <div className="mx-auto flex justify-center items-center cursor-pointer hover:opacity-[0.8] dark:hover:opacity-[0.5] 
      hover:bg-blend-color-dodge transistion-all ease-in-out duration-1000 hover:translate-y-1 xl:hover:translate-y-2">
      <main className="flex flex-col " onClick={onCardClick}>
        <div className="text-center">
          <img
            src={data.Poster == "N/A" ? Error404 : data.Poster}
            alt={data.Title}
            className="h-72 md:h-96 xl:w-[340px] xl:h-[460px]"
          />
        </div>
        <div className="px-2 py-3 xl:py-4 mx-auto flex flex-col w-full h-20 xl:h-28 text-black dark:text-white 
        tracking-wide border-[1px] dark:border-none">
          <p className="font-semibold dark:font-light text-sm xl:text-base">{data.Title}</p>
          <p className="py-1 pb-2 text-black dark:text-[#9CAAB3] text-sm xl:text-base">Released Date: {data.Year}</p>
        </div>
      </main>
      </div>
    </div>
  );
};

export default SeriesCard;
