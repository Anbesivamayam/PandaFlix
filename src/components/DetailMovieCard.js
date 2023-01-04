import React from "react";

const DetailMovieCard = ({
  poster_path,
  title,
  release_date,
  name,
  vote_average,
  id,
}) => {
  const getPosterURL = (posterPath) => {
    // return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
    return `https://www.themoviedb.org/t/p/w400${posterPath}`;
  };
  return (
    <div
      className="flex flex-col mx-auto  gap-2 text-black dark:text-white border-[1px] dark:border-gray-900 rounded-lg
        scrollbar hover:opacity-[0.8] dark:hover:opacity-[0.5] transistion-all duration-500 ease-in cursor-pointer shadow-lg"
    >
      <main className=" gap-2 ">
        <section className="">
          <img
            src={getPosterURL(poster_path)}
            alt={title}
            className=" w-[272px] shadow-sm dark:rounded-lg "
          />
          <main className="flex flex-col px-3  text-[13px] ">
            <p className=" text-center font-semibold ">{title || name}</p>
          </main>
        </section>
      </main>
    </div>
  );
};

export default DetailMovieCard;
