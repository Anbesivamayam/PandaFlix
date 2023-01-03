import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import axios from "axios";
import MovieListing from "./components/MovieListing";
import MovieWorld from "./components/MovieWorld";

const movieAPI = "https://www.omdbapi.com";
axios.defaults.baseURL = movieAPI;

const App = () => {
  return (
    <div>
      <main className="">
        <header>
          <Header />
        </header>
        <section className="bg-[#0E0F11]">
          <Routes>
            <Route path="/" element={<MovieWorld />} />
            <Route path="/searchMovies" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </section>
        <footer className="bg-black">{/* <Footer /> */}</footer>
      </main>
    </div>
  );
};

export default App;
