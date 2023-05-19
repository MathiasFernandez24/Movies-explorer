import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pelis: []
}

const favoriteMovieSlice = createSlice({
    name: 'favoriteMovie',
    initialState: initialState,
    reducers: {
        addFavMovie: (state, action) => {
            state.pelis = [...state.pelis, action.payload]
            // console.log(action.payload)
            // console.log(state)
        },
        deleteFavMovie: (state, action) => {
            state.pelis = state.pelis.filter((i) => (i.id != action.payload.id))
        },
    },


})

export const { addFavMovie, deleteFavMovie } = favoriteMovieSlice.actions
const favouriteMovieReducer = favoriteMovieSlice.reducer
export default favouriteMovieReducer