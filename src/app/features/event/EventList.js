import React, { Component } from "react";
import EventListItem from "./EventListItem";
import InfiniteScroll from "react-infinite-scroller";

export class EventList extends Component {
    render() {
        let { events, moreEvents, loading, getNextEvents } = this.props;
        return (
            <React.Fragment>
                {events && events.length !== 0 && (
                    <InfiniteScroll
                        loadMore={getNextEvents}
                        pageStart={0}
                        hasMore={!loading && moreEvents}
                        initialLoad={false}
                    >
                        {events &&
                            events.map((event, i) => {
                                return (
                                    <EventListItem
                                        key={i}
                                        event={event}
                                    />
                                );
                            })}
                    </InfiniteScroll>
                )}
            </React.Fragment>
        );
    }
}

export default EventList;
