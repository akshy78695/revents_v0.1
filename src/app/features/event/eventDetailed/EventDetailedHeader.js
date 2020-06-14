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
}) => {
    const [isImgLoad, imgState] = useState(false);
    let { title, date, hostedBy, id, hostUid } = event;
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
                    src="https://www.theinnonthelake.co.uk/content/dam/pcdg/common/offers/drinks/pcp-ln19-drinksmenu-cocktails-img.jpg.asset/1580459596674.jpg"
                    alt=""
                    // style={{ width: "100%" }}
                    className="img-fluid"
                    onLoad={() => imgState(true)}
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
                {/* {isHost && } */}
                <div className="card-body py-2">
                    {!isHost && (
                        <Fragment>
                            {isGoing ? (
                                <button
                                    onClick={() => cancelGoingToEvent(event)}
                                    className="btn btn-secondary btn-sm mx-2"
                                >
                                    Cancel my event
                                </button>
                            ) : (
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
