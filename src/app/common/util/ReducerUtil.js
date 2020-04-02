export const createReducer = (initialState, fnmap) => {
    return (state = initialState, {type, payload}) => {
        const handler = fnmap[type];
        return handler ? handler(state, payload) : state;
    };
};
