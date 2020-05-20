import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReduxToastr from "react-redux-toastr";
import { Provider } from "react-redux";
import { ConfigureStore } from "./app/store/ConfigureStore";
// const { ConfigureStore } = await import("./app/store/ConfigureStore");
import { BrowserRouter } from "react-router-dom";

const store = ConfigureStore();
// console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
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
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
