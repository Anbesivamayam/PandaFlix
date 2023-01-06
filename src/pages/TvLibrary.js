import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Movies from "../components/Movies";
import { Navigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiFillStar } from "react-icons/ai";
import DetailMovieCard from "../components/DetailMovieCard";
import Pagination from "../components/Pagination";

const TvLibrary = ({ setLoading, loading }) => {
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const tvRef = useRef(null)



// Getting current page
const pagination = (PageNumber) => setCurrentPage(PageNumber);


// Calling an element inside div
  const handleClick =()=>{
    tvRef.current?.scrollIntoView({behavior: 'smooth'})
  }
  // Top rated Series
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
    // Popular Series
    useEffect(() => {
      setLoading(true);
      axios
        .get(
          `https://api.themoviedb.org/3/tv/popular?api_key=f870259c0e2838b7a85074234dc46809&language=en-US&page=${currentPage}`
        )
        .then((response) => {
          setPopularSeries(response.data.results);
        }).then(() => {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [currentPage]);
  return (
    <div className="h-full text-black dark:text-white dark:font-normal font-semibold ">
      <section className="">
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
                <p className="text-2xl md:text-3xl lg:text-7xl">{data.name}</p>
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
        <h3 className="px-5 xl:px-8  py-3">Upcoming Series</h3>
        <main className="mx-auto flex pb-2 px-6 xl:px-6 gap-2 xl:gap-4 overflow-x-auto scrollbar ">
          {topRatedSeries.map((movie, index) => {
            return <Movies key={index} {...movie} />;
          })}
        </main>
      </section>
      <section ref={tvRef}>
          <h3 className="px-5 xl:px-8  py-3"> All Series </h3>
          <main className="grid md:grid-cols-3 lg:grid-cols-5 pb-6 gap-4 mx-auto px-6 ">
            {popularSeries.map((tv, index) => {
              return (
                <DetailMovieCard key={index} {...tv} loading={loading} />
              );
            })}
          </main>
      </section>
      <div className="mx-auto px-6 py-3 flex flex-wrap justify-center items-center  gap-4">
          <button
            className="lightTheme"
            disabled={currentPage === 1}
            onClick={() =>{
              setCurrentPage((prevcurrentPage) => prevcurrentPage - 1)
              handleClick()
            }   
            }
          >
            Prev
          </button>
          <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalPages={380}
            pagination={pagination}
            handleClick={handleClick}
          />
          <button
            className="lightTheme"
            onClick={() =>{
              setCurrentPage((prevcurrentPage) => prevcurrentPage + 1)
              handleClick()
            }       
            }
          >
            Next
          </button>
        </div>
    </div>
  );
};

export default TvLibrary;
