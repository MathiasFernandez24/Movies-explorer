import { combineReducers, createStore } from "redux";
import FavoritesReducer from "./reducers/FavoritesReducer";

const RootReducer = combineReducers(
    {
        favRed: FavoritesReducer
    }
)

export default createStore(RootReducer)