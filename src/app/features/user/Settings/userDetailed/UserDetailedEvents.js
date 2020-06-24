// import { Image, Card, Grid, Segment, Header, Menu } from "semantic-ui-react";
import React, { Fragment } from "react";
import "./css/eventsStyle.css";
import format from "date-fns/format";
import LoadingComponent from "../../../../layout/LoadingComponent";
import { Link } from "react-router-dom";
import { withGetScreen } from "react-getscreen";

const UserDetailedEvents = ({ events, eventsLoading, profile, isMobile }) => {
    const today = new Date(Date.now());

    return (
        <div className="row no-gutters mt-3 mb-4">
            <div className="col-md-9">
                <ul
                    className="nav nav-tabs"
                    id="myTab"
                    role="tablist"
                    onChange={(e, data) => {}}
                >
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            id="all-tab"
                            data-toggle="tab"
                            href="#all"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                        >
                            All Events
                        </a>
                    </li>
                    {isMobile() ? (
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                                href="!#"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sorted events
                            </a>
                            <div className="dropdown-menu">
                                <a
                                    className="nav-link"
                                    id="past-tab"
                                    data-toggle="tab"
                                    href="#past"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                >
                                    Past Events
                                </a>
                                <a
                                    className="nav-link"
                                    id="future-tab"
                                    data-toggle="tab"
                                    href="#future"
                                    role="tab"
                                    aria-controls="contact"
                                    aria-selected="false"
                                >
                                    Future Events
                                </a>
                                <a
                                    className="nav-link"
                                    id="hosted-tab"
                                    data-toggle="tab"
                                    href="#hosted"
                                    role="tab"
                                    aria-controls="contact"
                                    aria-selected="false"
                                >
                                    Hosted Events
                                </a>
                            </div>
                        </li>
                    ) : (
                        <Fragment>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="past-tab"
                                    data-toggle="tab"
                                    href="#past"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                >
                                    Past Events
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="future-tab"
                                    data-toggle="tab"
                                    href="#future"
                                    role="tab"
                                    aria-controls="contact"
                                    aria-selected="false"
                                >
                                    Future Events
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="hosted-tab"
                                    data-toggle="tab"
                                    href="#hosted"
                                    role="tab"
                                    aria-controls="contact"
                                    aria-selected="false"
                                >
                                    Hosted Events
                                </a>
                            </li>
                        </Fragment>
                    )}
                    <hr />
                </ul>
                <br />
                <div className="tab-content" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="all"
                        role="tabpanel"
                        aria-labelledby="all-tab"
                    >
                        {eventsLoading ? (
                            <LoadingComponent
                                loadingMessage="Loading Events"
                                loaderWidth="50px"
                                loaderHeight="30vh"
                            />
                        ) : (
                            events &&
                            events.map((event) => (
                                <Link
                                    to={`/event/${event.id}`}
                                    style={{
                                        display: "inline-block",
                                        width: "150px",
                                    }}
                                    className="event-card"
                                    key={event.id}
                                >
                                    <div className="card">
                                        <img
                                            src={`/assets/categoryImages/${event.category}.jpg`}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <p className="card-text text-center font-weight-bold">
                                                {event.title}
                                            </p>
                                            <div className="text-center">
                                                {event.date &&
                                                    format(
                                                        event.date &&
                                                            event.date.toDate(),
                                                        "dd LLL yyyy"
                                                    )}
                                            </div>
                                            <div className="text-center">
                                                {event.date &&
                                                    format(
                                                        event.date &&
                                                            event.date.toDate(),
                                                        "h:mm a"
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                    <div
                        className="tab-pane fade"
                        id="past"
                        role="tabpanel"
                        aria-labelledby="past-tab"
                    >
                        {events &&
                            events.map((event) => {
                                if (
                                    new Date(
                                        event.date && event.date.toDate()
                                    ) < today
                                ) {
                                    return (
                                        <Link
                                            to={`/event/${event.id}`}
                                            style={{
                                                display: "inline-block",
                                                width: "150px",
                                            }}
                                            className="event-card"
                                            key={event.id}
                                        >
                                            <div className="card">
                                                <img
                                                    src={`/assets/categoryImages/${event.category}.jpg`}
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <p className="card-text text-center font-weight-bold">
                                                        {event.title}
                                                    </p>
                                                    <div className="text-center">
                                                        {format(
                                                            event.date &&
                                                                event.date.toDate(),
                                                            "dd LLL yyyy"
                                                        )}
                                                    </div>
                                                    <div className="text-center">
                                                        {format(
                                                            event.date &&
                                                                event.date.toDate(),
                                                            "h:mm a"
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                    </div>
                    <div
                        className="tab-pane fade"
                        id="future"
                        role="tabpanel"
                        aria-labelledby="future-tab"
                    >
                        {events &&
                            events.map((event) => {
                                if (
                                    new Date(
                                        event.date && event.date.toDate()
                                    ) > today
                                ) {
                                    return (
                                        <Link
                                            to={`/event/${event.id}`}
                                            style={{
                                                display: "inline-block",
                                                width: "150px",
                                            }}
                                            className="event-card"
                                            key={event.id}
                                        >
                                            <div className="card">
                                                <img
                                                    src={`/assets/categoryImages/${event.category}.jpg`}
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <p className="card-text text-center font-weight-bold">
                                                        {event.title}
                                                    </p>
                                                    <div className="text-center">
                                                        {format(
                                                            event.date &&
                                                                event.date.toDate(),
                                                            "dd LLL yyyy"
                                                        )}
                                                    </div>
                                                    <div className="text-center">
                                                        {format(
                                                            event.date &&
                                                                event.date.toDate(),
                                                            "h:mm a"
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                    </div>
                    <div
                        className="tab-pane fade"
                        id="hosted"
                        role="tabpanel"
                        aria-labelledby="hosted-tab"
                    >
                        {events &&
                            events.map((event) => {
                                if (event.hostUid === profile.id) {
                                    return (
                                        <Link
                                            to={`/event/${event.id}`}
                                            style={{
                                                display: "inline-block",
                                                width: "150px",
                                            }}
                                            className="event-card"
                                            key={event.id}
                                        >
                                            <div className="card">
                                                <img
                                                    src={`/assets/categoryImages/${event.category}.jpg`}
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <p className="card-text text-center font-weight-bold">
                                                        {event.title}
                                                    </p>
                                                    <div className="text-center">
                                                        {format(
                                                            event.date &&
                                                                event.date.toDate(),
                                                            "dd LLL yyyy"
                                                        )}
                                                    </div>
                                                    <div className="text-center">
                                                        {format(
                                                            event.date &&
                                                                event.date.toDate(),
                                                            "h:mm a"
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
            <hr className="mb-5"/>
        </div>
    );
};

export default withGetScreen(UserDetailedEvents);
