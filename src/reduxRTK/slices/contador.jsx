import { createSlice } from "@reduxjs/toolkit"
//ESTE ARCHIVO ES A MODO DE EJEMPLO
const initialState = {
    valor: 0,
    nombre: "Mathias",
    apellido: "",
    listilla: ["uno", "dos", "tres"]
}

export const counterSlice = createSlice({
    name: "contadorcito",
    initialState: initialState,
    reducers: {
        incrementar: (state) => {
            state.valor = state.valor + 1
        },
        restarUno: (state) => {
            state.valor -= 1
        },
        cambiarNombre: (state, action) => {
            state.nombre = action.payload
        },
        agregarALista: (state, action) => {
            state.listilla = [...state.listilla, action.payload]
        }
    }
})
export const { incrementar, restarUno, cambiarNombre, agregarALista } = counterSlice.actions

const counterReducer = counterSlice.reducer //lo importante es exportar esto
export default counterReducer