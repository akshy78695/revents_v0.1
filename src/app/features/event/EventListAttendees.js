import React from "react";
import { Link } from "react-router-dom";

const EventListAttendees = ({ attendee }) => {
    return (
        <Link to={`/profile/${attendee.id}`}>
            <img
                style={{
                    width: "50px",
                    borderRadius: "50px",
                }}
                className="mx-2"
                src={attendee.photoURL}
                alt=""
            />
        </Link>
    );
};

export default EventListAttendees;
