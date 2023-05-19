const initialState = {
    fav: ["uno", "dos", "tres"],
    message: "Primer Mensaje"
}

const FavoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                message: action.newFav
            }
        case "cambiar":
            return {
                ...state,
                message: action.newMessage
            }
        default:
            return state
    }
}

export default FavoritesReducer