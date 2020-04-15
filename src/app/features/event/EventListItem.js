import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        } = this.props.event;
        let { deleteEvent } = this.props;
        return (
            <div className="card border shadow-lg rounded-lg mb-3">
                <div className="card-body row">
                    <div className="col-md-2 mr-3">
                        <img
                            style={{ borderRadius: "62px" }}
                            src={hostPhotoURL}
                            alt=""
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="h3">{title}</div>
                        <div className="h6">
                            Hosted by <a href="#!">{hostedBy}</a>
                        </div>
                    </div>
                </div>
                <hr style={{ margin: "0" }} />
                <div className="card-body">
                    <i className="far fa-clock"></i> {date} |{" "}
                    <i className="fas fa-map-marker-alt"></i> {venue}
                </div>
                <hr style={{ margin: "0" }} />
                <div
                    className="card-body border-left border-right"
                    style={{ backgroundColor: "#e6e6e6" }}
                >
                    {attendees.map((attendee) => (
                        <img
                            key={attendee.id}
                            style={{ borderRadius: "62px" }}
                            className="mx-2"
                            src={attendee.photoURL}
                            alt=""
                        />
                    ))}
                </div>
                <hr style={{ margin: "0" }} />
                <div className="card-body row">{description}</div>
                <div className="ml-auto mb-4 mr-4">
                    <Link
                        to={`/event/${id}`}
                        className="btn btn-info mr-3"
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
                        View
                    </Link>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            deleteEvent(this.props.event.id);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default EventListItem;
