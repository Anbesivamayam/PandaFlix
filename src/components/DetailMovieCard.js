import React from "react";
import Loading from "./loading";
import ErrorImage from "../images/404Error.gif"

const DetailMovieCard = ({
  poster_path,
  title,
  loading,
  name,
  id,
}) => {
  const getPosterURL = (posterPath) => {
    // return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
    return `https://www.themoviedb.org/t/p/w400${posterPath}`;
  };
  return (
    <div
      className="flex flex-col mx-auto gap-2 text-black dark:text-white border-[1px] dark:border-gray-900 rounded-lg
        scrollbar hover:opacity-[0.8] dark:hover:opacity-[0.5] transistion-all duration-500 ease-in-out cursor-pointer shadow-xl
        hover:translate-y-1"
    >
      <main className=" gap-2 ">
        <section className="">
         <div>
         {loading? <div className="mx-auto px-4 flex justify-center items-center w-[220px] h-[360px]"><Loading/></div>: 
         <img
            // src={ ErrorImage }
            src={poster_path ==null ? ErrorImage : getPosterURL(poster_path)}
            alt={title}
            className=" w-[272px] h-[360px] shadow-sm dark:rounded-lg "
          />
  }
         </div>
          <main className="flex flex-col px-2 py-3 text-sm ">
            <p className=" text-center font-semibold ">{title || name}</p>
          </main>
        </section>       
      </main>
    </div>
  );
};

export default DetailMovieCard;
