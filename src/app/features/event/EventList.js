import React, { Component } from "react";
import EventListItem from "./EventListItem";

export class EventList extends Component {
    render() {
        let {events, selectEvent, deleteEvent} = this.props
        return (
            <React.Fragment>
                {events.map(event => {
                    return <EventListItem key={event.id} event={event} selectEvent={selectEvent} deleteEvent={deleteEvent}/>;
                })}
            </React.Fragment>
        );
    }
}

export default EventList;
