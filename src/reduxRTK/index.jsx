import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/contador";
import favouriteMovieReducer from "./slices/FavoriteMoviesSlice";
import AuthReducer from "./slices/AuthSilce";
// import counterReducer from './slices/contador'


export const store = configureStore({
    reducer: {
        contador: counterReducer, //Ejemplo
        favMovies: favouriteMovieReducer,
        auth: AuthReducer
    },
})