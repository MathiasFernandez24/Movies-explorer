const initialState = {
    fav: ["uno", "dos", "tres"],
    message: "Primer Mensaje"
}

const FavoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "cambiar":
            console.log("----------------------------------------");
            return {
                ...state,
                message: action.newMessage
            }
        default:
            return state
    }
}

export default FavoritesReducer