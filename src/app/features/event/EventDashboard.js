import React, { Component } from "react";
import EventList from "./EventList";
import { connect } from "react-redux";
import { createEvent, updateEvent, deleteEvent } from "./eventActions";

const mapState = state => ({
    events: state.events
});

const actions = {
    createEvent,
    updateEvent,
    deleteEvent
};

class EventDashboard extends Component {
    handleDeleteEvent = id => {
        this.props.deleteEvent(id);
    };
    render() {
        let { events } = this.props;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-7">
                        <EventList
                            events={events}
                            deleteEvent={this.handleDeleteEvent}
                        />
                    </div>
                    <div className="col-md-5 d-none d-md-block d-lg-block d-sm-none d-xs-none">
                        Activity feed
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(mapState, actions)(EventDashboard);
