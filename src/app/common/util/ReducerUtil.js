export const createReducer = (initialState, fnmap) => {
    return (state = initialState, {type, payload}) => {
        const handler = fnmap[type];
        console.log("Handler in reducerUtil      ", handler);
        return handler ? handler(state, payload) : state;
    };
};
