import React, { Component } from "react";
import EventList from "./EventList";
import { connect } from "react-redux";
import { createEvent, updateEvent, deleteEvent } from "./eventActions";
import { withGetScreen } from "react-getscreen";
import LoadingComponent from "../../layout/LoadingComponent";
import RecentActivity from "./eventActivity/RecentActivity";
import { firestoreConnect } from "react-redux-firebase";

const mapState = (state) => ({
    events: state.firestore.ordered.events,
    loading: state.async.loading,
});

const actions = {
    createEvent,
    updateEvent,
    deleteEvent,
};

class EventDashboard extends Component {
    handleDeleteEvent = (id) => {
        this.props.deleteEvent(id);
    };
    render() {
        let { events, loading } = this.props;
        if (loading) return <LoadingComponent />;
        return (
            <React.Fragment>
                <div className="row">
                    <div
                        className={`col-md-7 ${this.props.isMobile() && "p-0"}`}
                        // className={`col-md-7 }`}
                    >
                        {loading ? (
                            <LoadingComponent />
                        ) : (
                            <EventList
                                events={events}
                                deleteEvent={this.handleDeleteEvent}
                            />
                        )}
                    </div>
                    <div className="col-md-5 d-none d-md-block d-lg-block d-sm-none d-xs-none">
                        <RecentActivity />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    mapState,
    actions
)(firestoreConnect([{ collection: "events" }])(withGetScreen(EventDashboard)));
