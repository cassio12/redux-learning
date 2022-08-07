import { combineReducers } from "redux";
import { reducers as fruitReducers } from "./fruit.reducer";

const reducers = combineReducers({
    fruitReducers,
    
})


export { reducers }