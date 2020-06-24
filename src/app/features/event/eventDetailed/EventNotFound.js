import React from "react";
import { withRouter } from "react-router-dom";

const EventNotFound = ({ history }) => {
    return (
        <div className="text-center">
            <div className="h2">Sorry! this Event is not available</div>
            <div className="h5">
                The link may be broken or Event might have been deleted.
            </div>
            <button
                onClick={() => history.push("/events")}
                style={{ textDecoration: "none" }}
                className="btn btn-link h3"
            >
                <span>
                    <svg
                        className="align-middle bi bi-arrow-left-square"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                        />
                        <path
                            fillRule="evenodd"
                            d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                        />
                        <path
                            fillRule="evenodd"
                            d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                        />
                    </svg>
                </span>
                <span className="h3 align-middle ml-2">Go to events</span>
            </button>
        </div>
    );
};

export default withRouter(EventNotFound);
