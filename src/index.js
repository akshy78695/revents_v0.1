import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReduxToastr from "react-redux-toastr";
import { Provider } from "react-redux";
import { createFirestoreInstance, reduxFirestore } from "redux-firestore";
import { BrowserRouter } from "react-router-dom";
import { getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import thunk from "redux-thunk";
import firebase from "./app/config/firebase";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./app/reducers/rootReducer";
// import { compose } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"

// console.log(store.getState());

const rrfConfig = {
    userProfile: "users",
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    updateProfileOnLogin: false,
};

const middlewares = [thunk.withExtraArgument({ getFirestore })];

const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reduxFirestore(firebase)
);

const store = createStore(rootReducer, composedEnhancer);

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, // <- needed if using firestore
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
                <ReduxToastr
                    position="bottom-right"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    timeOut={2500}
                />
                <App />
            </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
