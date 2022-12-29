import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  series: [],
  movieInfo: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addSeries: (state, action) => {
      state.series = action.payload;
    },
    showImdbInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
  },
});
export const { addMovies, addSeries, showImdbInfo } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const showAllInfo = (state) => state.movies.movieInfo;
export default movieSlice.reducer;
