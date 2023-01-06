import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import axios from "axios";
import MovieWorld from "./components/MovieWorld";
import MovieInformation from "./components/MovieInformation";
import MovieLibrary from "./pages/MovieLibrary";
import TvLibrary from "./pages/TvLibrary";
import toast, { Toaster } from 'react-hot-toast';

const movieAPI = "https://www.omdbapi.com";
axios.defaults.baseURL = movieAPI;

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [darkTheme, setDarkTheme] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <main className={darkTheme ? "dark" : ""}>
        <header className="dark:bg-[#151619] bg-[#FCFCFC]">
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        </header>
        <section className="dark:bg-[#0E0F11] bg-[#F7F7F7] transition-shadow duration-500">
          <Routes>
            <Route
              path="/"
              element={
                <MovieWorld
                  popularMovies={popularMovies}
                  setPopularMovies={setPopularMovies}
                  topRated={topRated}
                  setTopRated={setTopRated}
                  nowPlaying={nowPlaying}
                  setNowPlaying={setNowPlaying}
                  upcoming={upcoming}
                  setUpcoming={setUpcoming}
                  loading={loading}
                  setLoading={setLoading}
                />
              }
            />
            <Route
              path="/movielibrary"
              element={
                <MovieLibrary
                  upcoming={upcoming}
                  setUpcoming={setUpcoming}
                  popularMovies={popularMovies}
                  setPopularMovies={setPopularMovies}
                  loading={loading}
                  setLoading={setLoading}
                />
              }
            />
            <Route path="/serieslibrary" element={<TvLibrary loading={loading} setLoading={setLoading} />} />
            {/* <Route path="movie/:id" element={<MovieInformation />} /> */}
            <Route path="/searchMovies" element={<Home />} />
            <Route
              path="/movie/:imdbID"
              element={
                <MovieDetail loading={loading} setLoading={setLoading} />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </section>
        <footer className="dark:bg-[#151619] bg-[#F7F7F7]">
          <Footer />
        </footer>
      </main>
      <Toaster  />
    </div>
  );
};

export default App;
