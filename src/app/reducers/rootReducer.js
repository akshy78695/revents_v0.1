import { combineReducers } from "redux";
import testReducer from "../features/test/TestReducer";

const rootReducer = combineReducers({
    test: testReducer
});

export default rootReducer;
