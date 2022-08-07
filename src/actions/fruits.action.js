import { actionsType } from "../constants/fruits";

const actions = {
    add: fruit => ({
        type: actionsType.ADD_FRUIT,
        payload: fruit,
    }),
    remuve : fruit => ({
        type: actionsType.REMUVE_FRUIT,
        payload: fruit
    }),
}

export { actions };