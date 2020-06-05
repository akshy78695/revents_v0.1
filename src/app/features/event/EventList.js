import React, { Component } from "react";
import EventListItem from "./EventListItem";

export class EventList extends Component {
    render() {
        let {events, selectEvent} = this.props
        return (
            <React.Fragment>
                {events && events.map((event, i) => {
                    return <EventListItem key={i} event={event} selectEvent={selectEvent}/>;
                })}
            </React.Fragment>
        );
    }
}

export default EventList;
