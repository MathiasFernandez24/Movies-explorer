import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_AUTH_LOGIN, URL_AUTH_SIGNUP } from "../../constants/firebase";

const initialState = {
    userId: "",
    email: "",
    token: "",
    loading: false,
    error: false
}

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (emailAndPassWord, asyncThunk) => {
        const res = await fetch(`${URL_AUTH_SIGNUP}`, {
            method: 'POST',
            body: JSON.stringify({
                email: emailAndPassWord.email,
                password: emailAndPassWord.password,
                returnSecureToken: true,
            })
        })
        const data = res.json()
        return data
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (emailAndPassWord, asyncThunk) => {
        const res = await fetch(`${URL_AUTH_LOGIN}`, {
            method: 'POST',
            body: JSON.stringify({
                email: emailAndPassWord.email,
                password: emailAndPassWord.password,
                returnSecureToken: true,
            })
        })
        const data = res.json()
        console.log(data);
        return data
    }
)


const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.userId = ""
            state.email = ""
            state.token = ""
            state.loading = false
            state.error = false
        },

    },
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
            state.loading = true
        })
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.loading = false
            state.email = action.payload.email
            state.userId = action.payload.localId
            state.token = action.payload.idToken
            if (action.payload.error) {
                switch (action.payload.error.message) {
                    case "EMAIL_EXISTS":
                        state.error = "Este email ya se encuentra registrado"
                        break;
                    case "OPERATION_NOT_ALLOWED":
                        state.error = "Inicio de sesion con clave desabilitado"
                        break;
                    case "TOO_MANY_ATTEMPTS_TRY_LATER":
                        state.error = "Demasiados intentos, intenta luego"
                        break;
                    default:
                        break;
                }
            }
        })
        builder.addCase(signUp.rejected, (state) => {
            state.loading = false
            state.error = "Error en SIGN UP"
        })


        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false
            state.email = action.payload.email
            state.userId = action.payload.localId
            state.token = action.payload.idToken
            if (action.payload.error) {
                switch (action.payload.error.message) {
                    case "EMAIL_NOT_FOUND":
                        state.error = "Este email no se encuentra registrado"
                        break;
                    case "INVALID_PASSWORD":
                        state.error = "Password incorrecta"
                        break;
                    case "USER_DISABLED":
                        state.error = "Cuenta deshabilitada"
                        break;
                    default:
                        break;
                }
            }
        })
        builder.addCase(login.rejected, (state) => {
            state.loading = false
            state.error = "Error en LOGIN"
        })
    }

})


const AuthReducer = AuthSlice.reducer
export const { logout } = AuthSlice.actions
export default AuthReducer