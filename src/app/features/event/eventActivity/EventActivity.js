import { Feed, Header, Segment } from "semantic-ui-react";
import EventActivityItem from "./EventActivityItem";
import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import LoadingComponent from "../../../layout/LoadingComponent";

const query = [
    {
        collection: "activity",
        orderBy: ["timestamp", "desc"],
        limit: 5,
    },
];
const mapState = (state) => ({
    activities: state.firestore.ordered.activity,
    requesting: state.firestore.status.requesting.activity,
});

export class EventActivity extends Component {
    render() {
        const { activities, requesting } = this.props;
        return (
            // <Sticky context={contextRef} offset={100}>
            <div className="sticky-top" style={{ top: "80px", zIndex: "0" }}>
                <Header attached="top" content="Recent Activity" />
                <Segment attached>
                    {requesting ? (
                        <Feed style={{ height: "50vh" }}>
                            <LoadingComponent loaderWidth="40px" />
                        </Feed>
                    ) : (
                        <Feed>
                            {activities &&
                                activities.map((activity) => (
                                    <EventActivityItem
                                        key={activity.id}
                                        activity={activity}
                                    />
                                ))}
                        </Feed>
                    )}
                </Segment>
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default connect(mapState)(firestoreConnect(query)(EventActivity));
