import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
