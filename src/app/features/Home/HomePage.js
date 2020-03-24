import React from "react";
import "../../../App.css";

const HomePage = ({history}) => {
    return (
        <div
            style={{
                height: "100vh",
                backgroundImage: `url(https://i.ytimg.com/vi/RiCVFCzP8EM/maxresdefault.jpg)`,
                backgroundRepeat: "no-repeat"
                ,backgroundSize:"cover"
            }}
        >

            <div className="center">
                <div>
                    <div className="text-center" style={{ width: "100%" }}>
                        <div style={{ fontSize: "7vw" }}>
                            <img src="./assets/logo.png" style={{width:"9vw"}} alt="" />
                            <span className="align-middle text-white font-weight-bold ml-2">Re-vents</span>
                        </div>
                    </div>
                    <div className="text-center mt-4" style={{ width: "100%" }}>
                        <button onClick={() => history.push("/events")} className="btn btn-outline-light btn-lg">
                            GEt Started <i className="fas fa-arrow-circle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    // return (
    //     <div style={{ height: "100vh" }}>
    //         <div class="center">
    //             <p>I am vertically and horizontally centered.</p>
    //         </div>
    //     </div>
    // );
};

export default HomePage;
