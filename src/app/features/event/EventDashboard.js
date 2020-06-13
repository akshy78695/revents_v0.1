import React, { Component, Fragment } from "react";
import EventList from "./EventList";
import { connect } from "react-redux";
import { getEventsForDashboard } from "./eventActions";
import { withGetScreen } from "react-getscreen";
import LoadingComponent from "../../layout/LoadingComponent";
import { firestoreConnect, isEmpty } from "react-redux-firebase";
import EventActivity from "./eventActivity/EventActivity";

const query = [
    {
        collection: "activity",
        orderBy: ["timestamp", "desc"],
        limit: 5,
    },
];
const mapState = (state) => ({
    events: state.events,
    loading: state.async.loading,
    activities: state.firestore.ordered.activity,
});

const actions = {
    getEventsForDashboard,
};

class EventDashboard extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            moreEvents: false,
            loadingInitial: true,
            loadedEvents: [],
        };
    }

    async componentDidMount() {
        this._isMounted = true;
        let next = await this.props.getEventsForDashboard();

        if (next && next.docs && next.docs.length > 1) {
            this.setState({
                moreEvents: true,
                loadingInitial: false,
            });
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate(prevProps) {
        if (this.props.events !== prevProps.events) {
            this.setState({
                loadedEvents: [
                    ...this.state.loadedEvents,
                    ...this.props.events,
                ],
            });
        }
    }
    getNextEvents = async () => {
        const { events } = this.props;
        let lastEvent = events && events[events.length - 1];
        let next = await this.props.getEventsForDashboard(lastEvent);
        if (next && next.docs && next.docs.length <= 1) {
            this.setState({
                moreEvents: false,
            });
        }
    };
    render() {
        let { loading, activities } = this.props;
        let { loadedEvents, moreEvents } = this.state;
        // if (!isLoaded(events)) return <LoadingComponent />;
        return (
            <React.Fragment>
                <div className="row">
                    <div
                        className={`col-md-7 ${this.props.isMobile() && "p-0"}`}
                        // className={`col-md-7 }`}
                    >
                        {this.state.loadingInitial ? (
                            <LoadingComponent
                                loadingMessage={"Loading events"}
                                loaderWidth={"60px"}
                            />
                        ) : (
                            <div>
                                <EventList
                                    events={loadedEvents}
                                    moreEvents={moreEvents}
                                    getNextEvents={this.getNextEvents}
                                    loading={loading}
                                />
                            </div>
                        )}
                        <div className="row mb-4">
                            <div className="col"></div>
                            <div className="col-md-4 text-center">
                                {!isEmpty(loadedEvents) && loading && (
                                    <Fragment>
                                        <span
                                            className="spinner-border align-middle"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        <span className="align-middle ml-3">
                                            Loading...
                                        </span>
                                    </Fragment>
                                )}
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    {/* <div className="col-md-5 d-none d-md-block d-lg-block d-sm-none d-xs-none"> */}
                    <div className="col-md-5">
                        <EventActivity activities={activities} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    mapState,
    actions
)(firestoreConnect(query)(withGetScreen(EventDashboard)));
