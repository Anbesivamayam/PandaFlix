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
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div>
      <main className={darkTheme ? "dark" : ""}>
        <header className="dark:bg-[#151619] bg-[#FCFCFC]">
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        </header>
        <section className="dark:bg-[#0E0F11] bg-[#F7F7F7] transition-shadow duration-500">
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
