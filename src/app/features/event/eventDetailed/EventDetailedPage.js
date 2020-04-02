import React from "react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat/EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { connect } from "react-redux";

const mapState = (state, ownProps) => {
    let eventId = ownProps.match.params.id;

    let event = {};
    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0];
    }
    return { event };
};

const EventDetailedPage = ({ event }) => {
    return (
        <div>
            {console.log(event)}
            {(event !== undefined) ?
            <div className="row">
                <div className="col-md-8">
                    <EventDetailedHeader event={event} />
                    <EventDetailedInfo event={event} />
                    <EventDetailedChat />
                </div>
                <div className="col-md-4">
                    <EventDetailedSidebar attendees={event.attendees} />
                </div>
            </div>
            : <div className="text-center h1">Sorry! Event Not FOund</div> 
            }
        </div>
    );
};

export default connect(mapState)(EventDetailedPage);
