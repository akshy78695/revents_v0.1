import React from "react";
import "../../../App.css";

const HomePage = ({ history }) => {
    return (
        <div
            style={{
                height: "100vh",
                backgroundImage: `url(https://i.ytimg.com/vi/RiCVFCzP8EM/maxresdefault.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="center">
                <div>
                    <div className="text-center" style={{ width: "100%" }}>
                        <div style={{ fontSize: "7vw" }}>
                            <img
                                src="./assets/logo.png"
                                style={{ width: "9vw" }}
                                alt=""
                            />
                            <span className="align-middle text-white font-weight-bold ml-2">
                                Re-vents
                            </span>
                        </div>
                    </div>

                    <div className="text-center mt-4" style={{ width: "100%" }}>
                        <button
                            onClick={() => history.push("/events")}
                            className="btn btn-outline-light btn-lg"
                        >
                            Get Started{" "}
                            <i className="fas fa-arrow-circle-right"></i>
                        </button>
                    </div>
                    <div className="text-center h6 text-white mt-4">
                        <span className="align-middle ">
                            <svg
                                className="bi bi-circle"
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                />
                            </svg>
                        </span>
                        <span className="align-middle ml-2">
                            Join event's with new people
                        </span>
                    </div>
                    <div className="text-center h6 text-white mt-2">
                        <span className="align-middle ">
                            <svg
                                className="bi bi-circle"
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                />
                            </svg>
                        </span>
                        <span className="align-middle ml-2">
                            Make new friends
                        </span>
                    </div>
                    <div className="text-center h6 text-white mt-2">
                        <span className="align-middle ">
                            <svg
                                className="bi bi-circle"
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                />
                            </svg>
                        </span>
                        <span className="align-middle ml-2">
                            Create your own event
                        </span>
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
