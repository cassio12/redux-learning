import { actionsType } from "../constants/fruits";

const INITIAL_STATE = {
    fruit: []
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsType.ADD_FRUIT:
            return { fruit: [...state.fruit, { ...action.payload }]}
        case actionsType.REMOVE_FRUIT:
            return { fruit: state.fruit.filter(fil => fil.id !== action.payload)}
        default:
            return state
    }
}

export { reducers }