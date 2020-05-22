import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import firebase from "../config/firebase.js";

export const rrfConfig = {
    userProfile: "users",
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    updateProfileOnLogin: false,
};

export const ConfigureStore = () => {
    const middlewares = [
        thunk.withExtraArgument({ getFirebase, getFirestore }),
        // thunkk
    ];
    // const Enhancers = [

    // ]
    const composedEnhancer = composeWithDevTools(
        applyMiddleware(...middlewares),
        reactReduxFirebase(firebase, rrfConfig),
        reduxFirestore(firebase)
    );

    const store = createStore(rootReducer, composedEnhancer);
    // const store = composeWithDevTools()
    return store;
};
