import { Feed, Header, Segment } from "semantic-ui-react";
import EventActivityItem from "./EventActivityItem";
import React, { Component } from "react";

export class EventActivity extends Component {
    render() {
        const { activities } = this.props;
        return (
            // <Sticky context={contextRef} offset={100}>
            <div className="sticky-top" style={{ top: "80px", zIndex: "0" }}>
                <Header attached="top" content="Recent Activity" />
                <Segment attached>
                    <Feed>
                        {activities &&
                            activities.map((activity) => (
                                <EventActivityItem
                                    key={activity.id}
                                    activity={activity}
                                />
                            ))}
                    </Feed>
                </Segment>
            </div>
        );
    }
}

export default EventActivity;
