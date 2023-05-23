// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     pelis: []
// }

// const favoriteMovieSlice = createSlice({
//     name: 'favoriteMovie',
//     initialState: initialState,
//     reducers: {
//         addFavMovie: (state, action) => {
//             state.pelis = [...state.pelis, action.payload]
//             console.log("REDUZ", action)
//             // console.log(state)
//         },
//         deleteFavMovie: (state, action) => {
//             state.pelis = state.pelis.filter((i) => (i.id != action.payload.id))
//         },
//     },


// })

// export const { addFavMovie, deleteFavMovie } = favoriteMovieSlice.actions
// const favouriteMovieReducer = favoriteMovieSlice.reducer
// export default favouriteMovieReducer

// FIREBASE DE ACA HACIA ABAJO, USAR UNO U OTRO

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../constants/firebase";

const initialState = {
    pelis: [],
    response: {},
    loading: false,
    error: false,
}

export const sendMoviesToFirebase = createAsyncThunk(
    'favoriteMovie/sendMoviesToFirebase',
    async (item, asyncThunk) => {
        const res = await fetch(
            `${DB_URL}fav_movies/${item.id}.json`,
            {
                method: 'POST',
                body: JSON.stringify({
                    // fecha: new Date().toLocaleString(),
                    item: item,

                })
            }
        )
        const data = res.json()
        return data
    }
)
export const deleteMoviesToFirebase = createAsyncThunk(
    'favoriteMovie/deleteMoviesToFirebase',
    async (item, asyncThunk) => {
        const res = await fetch(
            `${DB_URL}fav_movies/${item.id}.json`,
            {
                method: 'DELETE',
            }
        )
        const data = res.json()
        return data
    }
)

export const updateMovieInFirebase = createAsyncThunk(
    'favoriteMovie/updateMovieInFirebase',
    async (item, asyncThunk) => {
        const res = await fetch(`${DB_URL}fav_movies/${item.id}.json`, {
            method: 'PUT',
            body: JSON.stringify(item),
        });
        const data = res.json();
        return data;
    }
);

export const getMoviesFromFirebase = createAsyncThunk(
    'favoriteMovie/getMoviesFromFirebase',
    async (thunkAPI) => {
        const res = await fetch(`${DB_URL}fav_movies.json`).then(
            (data) => data.json()
        )
        const r = Object.values(res).map(i => i) //Convierto el objeto en array para poder hacerle un map y obtener solo el "item"
        return r
    }
)

const favoriteMovieSlice = createSlice({
    name: 'favoriteMovie',
    initialState: initialState,
    reducers: {
        addFavMovie: (state, action) => {
            state.pelis.push(action.payload)
            // SE PUEDE HACER USAR PUSH O SPREAD... TOOLKIT MANEJA LA LOGICA PARA PERMITIR EL PUSH
            // state.pelis = [...state.pelis, action.payload]
        },
        deleteFavMovie: (state, action) => {
            state.pelis = state.pelis.filter((i) => (i.id != action.payload.id))
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMoviesFromFirebase.fulfilled, (state, action) => {
            state.loading = true
            state.pelis = action.payload
        })
        // builder.addCase(deleteMoviesToFirebase.fulfilled, (state, action) => {
        //     // state.loading = true
        //     // state.pelis = action.payload
        // })



        builder.addCase(sendMoviesToFirebase.pending, (state) => {
            state.loading = true
        })
        builder.addCase(sendMoviesToFirebase.fulfilled, (state, action) => {
            state.loading = false
            state.response = action.payload
        })
        builder.addCase(sendMoviesToFirebase.rejected, (state) => {
            state.loading = false
        })

        //FORMA DEPRECADA DE HACERLO
        // [sendMoviesToFirebase.pending]: (state) => {
        //     state.loading = true
        // },
        // [sendMoviesToFirebase.fulfilled]: (state, { payload }) => {
        //     state.loading = false
        //     state.response = payload
        // },
        // [sendMoviesToFirebase.rejected]: (state) => {
        //     state.loading = false
        // }
    }


})

export const { addFavMovie, deleteFavMovie } = favoriteMovieSlice.actions

export const sendReducer = sendMoviesToFirebase.reducer

const favouriteMovieReducer = favoriteMovieSlice.reducer
export default favouriteMovieReducer