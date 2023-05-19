import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/contador";
import favouriteMovieReducer from "./slices/FavoriteMoviesSlice";
// import counterReducer from './slices/contador'


export const store = configureStore({
    reducer: {
        contador: counterReducer,
        favMovies: favouriteMovieReducer
    },
})