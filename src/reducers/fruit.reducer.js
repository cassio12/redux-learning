import { actionsType } from "../constants/fruits";

const INITIAL_STATE = {
    fruit: [
        {id: 3, name: 'Melão', quantity: 2},
        {id: 4, name: 'Uva', quantity: 4}
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