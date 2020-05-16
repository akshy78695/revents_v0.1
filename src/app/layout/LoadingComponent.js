import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import "./loadingComponent.css"

const LoadingComponent = () => {
    return (
        <Dimmer active={true}  inverted={true}>
            <Loader content="loading..."></Loader>
        </Dimmer>
        // <div style={{ height: "85vh" }}>
        //     <div className="loading">
        //         <Loader
        //             active
        //             inline="centered"
        //             size="medium"
        //             content="loading..."
        //         />
        //     </div>
        // </div>
    );
};

export default LoadingComponent;
