import { actionsType } from "../constants/fruits";

const INITIAL_STATE = {
    fruit: [
        {id: 1, name: 'Melon', quantity: 2},
        {id: 2, name: 'Grape', quantity: 4},
        {id: 3, name: 'Pear', quantity: 3},
    ]
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsType.ADD_FRUIT:
            return { fruit: [...state.fruit, { ...action.payload }]}
        case actionsType.REMUVE_FRUIT:
            return { fruit: state.fruit.filter(fil => fil.id !== action.payload)}
        default:
            return state
    }
}

export { reducers }