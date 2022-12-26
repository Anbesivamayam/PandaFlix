import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state)=> state.movies.movies
export default movieSlice.reducer;
