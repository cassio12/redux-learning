const actions = {
    add: fruit => ({
        type: 'ADD_FRUIT',
        payload: fruit,
    }),
    remuve : fruit => ({
        type: 'REMUVE_FRUIT',
        payload: fruit
    }),
}

export { actions };