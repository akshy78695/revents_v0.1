import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
// import drinks from "/assets/drinks.jpg"

const EventDetailedHeader = ({
    event,
    isHost,
    isGoing,
    goingToEvent,
    cancelGoingToEvent,
    loading,
    openModal,
    authenticated,
}) => {
    const [isImgLoad, imgState] = useState(false);
    let { title, date, hostedBy, id, hostUid, category } = event;
    return (
        <div>
            <div
                className=""
                style={{
                    position: "relative",
                    color: "white",
                }}
            >
                <img
                    src={
                        isImgLoad
                            ? `/assets/categoryImages/${category}.jpg`
                            : "/assets/solid1.jpg"
                    }
                    alt=""
                    // style={{ width: "100%" }}
                    className="img-fluid"
                    onLoad={() => imgState(true)}
                    style={{ paddingRight: "2px" }}
                />
                {isImgLoad && (
                    <div
                        className="px-4"
                        style={{ position: "absolute", bottom: "40px" }}
                    >
                        <p className="h2 font-weight-bold">{title} </p>
                        <p className="h5">
                            {date && format(date.toDate(), "EEEE do LLL")}
                        </p>
                        <p className="h5">
                            Hosted by{" "}
                            <strong>
                                <Link
                                    to={`/profile/${hostUid}`}
                                    className="text-white"
                                >
                                    {hostedBy}
                                </Link>{" "}
                            </strong>
                        </p>
                    </div>
                )}
            </div>

            <div className="card" style={{ width: "100%" }}>
                <div className="card-body py-2">
                    {event.cancelled && (
                        <span className="badge badge-danger">
                            <svg
                                className="bi bi-exclamation-triangle align-middle"
                                width="1.5em"
                                height="1.5em"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
                                />
                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                            </svg>
                            <span className="align-middle h6">
                                This event has been cancelled.
                            </span>
                        </span>
                    )}
                    {!isHost && (
                        <Fragment>
                            {isGoing && !event.cancelled && (
                                <button
                                    onClick={() => cancelGoingToEvent(event)}
                                    className="btn btn-secondary btn-sm mx-2"
                                >
                                    Cancel my event
                                </button>
                            )}
                            {!isGoing && authenticated && !event.cancelled && (
                                <button
                                    onClick={() => goingToEvent(event)}
                                    className="btn btn-primary btn-sm mx-2"
                                >
                                    {!loading ? (
                                        <span>Join this event</span>
                                    ) : (
                                        <Fragment>
                                            <span
                                                className="spinner-border spinner-border-sm ml-2 mr-1"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                            Loading...
                                        </Fragment>
                                    )}
                                </button>
                            )}
                            {!authenticated && !event.cancelled && (
                                <button
                                    onClick={() => openModal("UnauthModal")}
                                    className="btn btn-primary btn-sm mx-2"
                                >
                                    <span>Join this event</span>
                                </button>
                            )}
                        </Fragment>
                    )}
                    {isHost && (
                        <Link
                            to={`/manage/${id}`}
                            className="btn btn-info btn-sm float-right"
                        >
                            Manage Event
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventDetailedHeader;
