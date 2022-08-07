import { actionsType } from "../constants/fruits";

const actions = {
    add: fruit => ({
        type: actionsType.ADD_FRUIT,
        payload: fruit,
    }),
    remove : fruit => ({
        type: actionsType.REMOVE_FRUIT,
        payload: fruit
    }),
}

export { actions };