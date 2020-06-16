import React, { Component } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns/esm";
import { objectToArray } from "../../common/util/helpers";
import EventListAttendees from "./EventListAttendees";

export class EventListItem extends Component {
    scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };
    render() {
        let {
            id,
            title,
            hostedBy,
            hostPhotoURL,
            date,
            venue,
            attendees,
            description,
            cancelled,
            hostUid,
        } = this.props.event;
        return (
            <div className="card border shadow-lg rounded-lg mb-3">
                <div className="card-body row">
                    <div className="col-md-2 mr-3">
                        <img
                            style={{ width: "100px", borderRadius: "62px" }}
                            src={hostPhotoURL || "/assets/user.png"}
                            alt=""
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="h3 pl-2">
                            <Link to={`event/${id}`}>{title}</Link>
                        </div>
                        <div className="h6 pl-2">
                            Hosted by{" "}
                            <Link to={`/profile/${hostUid}`}>{hostedBy}</Link>
                        </div>
                        {cancelled && (
                            <div>
                                <span className=" h5 ml-2 text-center badge badge-danger py-1 px-3">
                                    Event has been Cancelled
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <hr style={{ margin: "0" }} />
                <div className="card-body">
                    <i className="far fa-clock"></i>{" "}
                    {format(date && date.toDate(), "EEEE do LLL")} at{" "}
                    {format(date && date.toDate(), "h:mm a")} |
                    <i className="fas fa-map-marker-alt"></i> {venue}
                </div>
                <hr style={{ margin: "0" }} />
                <div
                    className="card-body border-left border-right"
                    style={{ backgroundColor: "#e6e6e6" }}
                >
                    {attendees &&
                        objectToArray(attendees).map((attendee) => (
                            <EventListAttendees
                                key={attendee.id}
                                attendee={attendee}
                            />
                        ))}
                </div>
                <hr style={{ margin: "0" }} />
                <div className="card-body row">
                    <div className="col-md-12">{description}</div>
                </div>
                <div className="ml-auto mb-4 mr-4">
                    <Link
                        to={`/event/${id}`}
                        className="btn btn-info mr-3 pt-1"
                        onClick={() => {
                            try {
                                window.scroll({
                                    behavior: "smooth",
                                    top: 0,
                                });
                            } catch (err) {
                                if (err instanceof TypeError) {
                                    window.scroll(0, 0);
                                } else {
                                    throw err;
                                }
                            }
                        }}
                    >
                        <span className="align-middle">View</span>
                        <span className="ml-1">
                            <svg
                                className="bi bi-box-arrow-in-right"
                                width="1.3em"
                                height="1.3em"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.146 11.354a.5.5 0 0 1 0-.708L10.793 8 8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 1 8z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M13.5 14.5A1.5 1.5 0 0 0 15 13V3a1.5 1.5 0 0 0-1.5-1.5h-8A1.5 1.5 0 0 0 4 3v1.5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-8A.5.5 0 0 1 5 13v-1.5a.5.5 0 0 0-1 0V13a1.5 1.5 0 0 0 1.5 1.5h8z"
                                />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default EventListItem;
