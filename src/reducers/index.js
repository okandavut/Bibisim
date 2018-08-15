import { combineReducers } from "redux";
import HomeReducer from "../containers/HomeContainer/reducer";
import IndexReducer from "../containers/IndexContainer/reducer";

export default combineReducers({
    homeReducer: HomeReducer,
    indexReducer: IndexReducer
});