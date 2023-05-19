export const changeMessage = (newMensajito) => (
    {
        type: "cambiar",
        newMessage: newMensajito
    }
)
export const addFav = (newFavi) => (
    {
        type: "add",
        newFav: newFavi,
        newMessage: newFavi
    }
)