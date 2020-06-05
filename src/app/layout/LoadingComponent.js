import React from "react";
import "./loadingComponent.css";

const LoadingComponent = ({ loaderWidth, loadingMessage }) => {
    return (
        // <Dimmer active={true}  inverted={true}>
        //     <Loader content="loading..."></Loader>
        // </Dimmer>
        <div style={{ height: "85vh", margin: "0" }}>
            <div
                className="text-center align-middle"
                style={{
                    margin: "auto",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: " translate(-50%,-50%)",
                }} 
            >
                <img src="/assets/Rolling3.svg" alt="" width={loaderWidth} />
                <div className="h6 text-info">{loadingMessage}</div>
            </div>
            {/* <div className="align-middle text-center">
         </div> */}
        </div>
    );
};

export default LoadingComponent;
