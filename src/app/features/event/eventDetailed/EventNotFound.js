import React from "react";
import { NavLink } from "react-router-dom";

const EventNotFound = () => {
    return (
        <div className="text-center">
            <div className="h2">Sorry! this Event is not available</div>
            <div className="h5">
                The link may be broken or Event might have been deleted.
            </div>
            <NavLink to="/events" className="h5">
                Go to events
            </NavLink>
        </div>
    );
};

export default EventNotFound;
