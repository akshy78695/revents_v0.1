import { createReducer } from "../../common/util/ReducerUtil";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./TestConstants";

const intialState = {
    data: 42
};

const incrementCounter = state => {
    return { ...state, data: state.data + 1 };
};
const decrementCounter = state => {
    return { ...state, data: state.data - 1 };
};

// const testReducer = (state = intialState, action) => {
//     switch (action.type) {
//         case "INCREMENT_COUNTER":
//             return { ...state, data: state.data + 1 };
//         case "DECREMENT_COUNTER":
//             return { ...state, data: state.data - 1 };
//         default:
//             return state;
//     }
// };

export default createReducer(intialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter
});
