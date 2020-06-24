
// NOT USING CONFIGURESTORE AFTER UPDATING REACT-REDUX-FIRESTORE TO 3.0.0 
// MOVING EVERYTHING INTO INDEX.JS

// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
// import { reduxFirestore, getFirestore } from "redux-firestore";
// import thunk from "redux-thunk";
// import rootReducer from "../reducers/rootReducer";
// import firebase from "../config/firebase.js";

// export const rrfConfig = {
//     userProfile: "users",
//     attachAuthIsReady: true,
//     useFirestoreForProfile: true,
//     updateProfileOnLogin: false,
// };

// export const rrfProps = {
//     firebase,
//     config: rrfConfig,
//     dispatch: store.dispatch,
//     createFirestoreInstance, // <- needed if using firestore
// };
// export const ConfigureStore = () => {
//     const middlewares = [
//         thunk.withExtraArgument({ getFirebase, getFirestore }),
//         // thunkk
//     ];
//     // const Enhancers = [

//     // ]
//     const composedEnhancer = composeWithDevTools(
//         applyMiddleware(...middlewares),
//         reactReduxFirebase(firebase, rrfConfig),
//         reduxFirestore(firebase)
//     );

//     const store = createStore(rootReducer, composedEnhancer);
//     // const store = composeWithDevTools()
//     return store;
// };

// // export const ConfigureStore = () => {
// //     const middlewares = [
// //         thunk.withExtraArgument({ getFirebase, getFirestore }),
// //         // thunkk
// //     ];
// //     // const Enhancers = [

// //     // ]
// //     const composedEnhancer = composeWithDevTools(
// //         applyMiddleware(...middlewares),
// //         reactReduxFirebase(firebase, rrfConfig),
// //         reduxFirestore(firebase)
// //     );

// //     const store = createStore(rootReducer, composedEnhancer);
// //     // const store = composeWithDevTools()
// //     return store;
// // };
