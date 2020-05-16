import React from "react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat/EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { connect } from "react-redux";
import {withGetScreen} from "react-getscreen"

const mapState = (state, ownProps) => {
    let eventId = ownProps.match.params.id;

    let event = {};
    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0];
    }
    return { event };
};

const EventDetailedPage = ({ event, isMobile }) => {
    return (
        <div>
            {(event !== undefined) ?
            <div className="row">
                <div className={`col-md-8 ${isMobile() ? "p-0" : ""}`}>
                    <EventDetailedHeader event={event} />
                    <EventDetailedInfo event={event} />
                    <EventDetailedChat />
                </div>
                <div className="col-md-4">
                    <EventDetailedSidebar attendees={event.attendees} hostName={event.hostedBy} />
                </div>
            </div>
            : <div className="text-center h1">Sorry! Event Not FOund</div> 
            }
        </div>
    );
};

export default connect(mapState)(withGetScreen(EventDetailedPage));
