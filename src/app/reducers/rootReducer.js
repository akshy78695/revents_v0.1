import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { reducer as ToastrReducer } from "react-redux-toastr";
import testReducer from "../features/test/TestReducer";
import eventReducer from "../features/event/eventReducer";
import modalsReducer from "../features/modals/modalsReducer";
import authReducer from "../features/auth/authReducer";
import asyncReducer from "../features/async/asyncReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalsReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastrReducer,
});

export default rootReducer;
