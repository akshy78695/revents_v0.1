import React, { Component } from "react";
import EventList from "./EventList";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "./eventActions";
import { withGetScreen } from "react-getscreen";
import LoadingComponent from "../../layout/LoadingComponent";
import RecentActivity from "./eventActivity/RecentActivity";
import { firestoreConnect, isLoaded } from "react-redux-firebase";

const mapState = (state) => ({
    events: state.firestore.ordered.events,
});

const actions = {
    createEvent,
    updateEvent,
};

class EventDashboard extends Component {
    render() {
        let { events } = this.props;
        // if (!isLoaded(events)) return <LoadingComponent />;
        return (
            <React.Fragment>
                <div className="row">
                    <div
                        className={`col-md-7 ${this.props.isMobile() && "p-0"}`}
                        // className={`col-md-7 }`}
                    >
                        {!isLoaded(events) ? (
                            <LoadingComponent
                                loadingMessage={"Loading events"}
                                loaderWidth={"60px"}
                            />
                        ) : (
                            <EventList events={events} />
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
