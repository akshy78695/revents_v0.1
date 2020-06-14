// FORMSY is react library like redux form
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
    composeValidators,
    combineValidators,
    hasLengthGreaterThan,
    isRequired,
} from "revalidate";
import { createEvent, updateEvent, cancelToggle } from "./eventActions";
import InputText from "../../common/form/InputText";
import InputTextarea from "../../common/form/InputTextarea";
import SelectInput from "../../common/form/SelectInput";
import InputDate from "../../common/form/InputDate";
import PlaceInput from "../../common/form/PlaceInput";
import { withFirestore } from "react-redux-firebase";
import EventNotFound from "./eventDetailed/EventNotFound";

/*  
    http://api.openweathermap.org/data/2.5/weather?zip=401105,in&appid=d610bde57032cdc064598ffec1ea9f27

    http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d610bde57032cdc064598ffec1ea9f27
*/

/* 
// global google 
*/

const mapState = (state, ownProps) => {
    let eventId = ownProps.match.params.id;

    let event = {};

    if (
        state.firestore.ordered.events &&
        state.firestore.ordered.events.length > 0
    ) {
        event =
            state.firestore.ordered.events.filter(
                (event) => event.id === eventId
            )[0] || {};
    }
    return { initialValues: event, event, loading: state.async.loading };
};

const actions = {
    createEvent,
    updateEvent,
    cancelToggle,
};

const category = [
    { key: "drinks", text: "Drinks", value: "drinks" },
    { key: "culture", text: "Culture", value: "culture" },
    { key: "film", text: "Film", value: "film" },
    { key: "food", text: "Food", value: "food" },
    { key: "music", text: "Music", value: "music" },
    { key: "travel", text: "Travel", value: "travel" },
];
const validate = combineValidators({
    title: isRequired({ message: "hey! title is Required" }),
    category: isRequired({ message: "category is Required" }),
    description: composeValidators(
        isRequired({ message: "Description is required" }),
        hasLengthGreaterThan(4)({ message: "atleast 5 characters" })
    )(),
    city: isRequired({ message: "enter city" }),
    venue: isRequired({ message: "venue requried" }),
    date: isRequired({ message: "Date is requrired" }),
});
export class EventForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cityLatLng: {},
            venueLatLng: {},
            nullEvent: false,
        };
    }

    async componentDidMount() {
        const { firestore, match } = this.props;
        await firestore.setListener(`events/${match.params.id}`);
        // if (!event.exists) {
        //     this.setState({ nullEvent: true });
        // }
        // if (event.exists) {
        //     this.setState({ isEvent: true });
        // }
    }
    async componentWillUnmount() {
        const { firestore, match } = this.props;
        await firestore.unsetListener(`events/${match.params.id}`);
    }
    onSubmit = async (values) => {
        let onlyVenue = values.venue;
        onlyVenue =
            onlyVenue.indexOf(",") !== -1
                ? onlyVenue.substring(0, onlyVenue.indexOf(","))
                : onlyVenue;
        // getting latitude and longnitude from api
        await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${onlyVenue}&appid=d610bde57032cdc064598ffec1ea9f27`
        )
            .then((result) => {
                if (result.status === 400 || result.status === 404) {
                    return Promise.reject("venue address not found on map");
                }
                return result.json();
            })
            .then((data) => {
                values.venueLatLng = {
                    lat: data.coord.lat,
                    lng: data.coord.lon,
                };
            })
            .catch((e) => {
                console.log(e);
                console.log("error in getting lat and lng in creating event");
                values.venueLatLng = {};
            });
        try {
            if (this.props.initialValues.id) {
                await this.props.updateEvent(values);
                this.props.history.push(
                    `/event/${this.props.initialValues.id}`
                );
            } else {
                let createdEvent = await this.props.createEvent(values);
                this.props.history.push(`/event/${createdEvent.id}`);
            }
        } catch (e) {
            console.log(e);
        }
    };
    render() {
        const {
            initialValues,
            history,
            invalid,
            submitting,
            pristine,
            event,
            cancelToggle,
            loading,
        } = this.props;
        if (this.state.nullEvent) {
            return <EventNotFound />;
        }
        return (
            <Fragment>
                {this.props.initialValues.id && (
                    <button
                        className={`btn float-right my-2 ${
                            event.cancelled ? "btn-success" : "btn-danger"
                        }`}
                        onClick={() => cancelToggle(!event.cancelled, event.id)}
                    >
                        {event.cancelled ? "Reactivate Event" : "Cancel Event"}
                        {/* Cancel Event */}
                    </button>
                )}
                <div className="col-md-12 mx-auto px-0 mb-4 float-right">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group">
                                <label className="text-info">
                                    Event Details
                                </label>
                                <Field
                                    name="title"
                                    component={InputText}
                                    className="form-control mt-2"
                                    placeholder="TItle"
                                />
                                <Field
                                    name="category"
                                    component={SelectInput}
                                    options={category}
                                    multiple={false}
                                    className="custom-select mt-2"
                                    placeholder="Event About?"
                                />
                                <Field
                                    name="description"
                                    component={InputTextarea}
                                    className="form-control mt-2"
                                    placeholder="Little Description"
                                    rows={3}
                                />
                                <label className="mt-2 text-info">
                                    Event Location Details
                                </label>
                                <Field
                                    name="city"
                                    component={PlaceInput}
                                    className="form-control mt-2"
                                    placeholder="In Which CIty?"
                                />
                                <Field
                                    name="venue"
                                    component={PlaceInput}
                                    className="form-control mt-2"
                                    placeholder="Venue?"
                                />
                                <Field
                                    name="date"
                                    component={InputDate}
                                    dateFormat="dd LLL yyyy h:mm a"
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    className="form-control mt-2"
                                    placeholder="Date?"
                                />
                            </div>
                            <div className="float-right">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.props.handleSubmit(
                                        this.onSubmit
                                    )}
                                    disabled={invalid || submitting || pristine}
                                >
                                    {!loading ? (
                                        <span>Submit</span>
                                    ) : (
                                        <Fragment>
                                            <span
                                                className="spinner-border spinner-border-sm mx-3"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </Fragment>
                                    )}
                                </button>
                                <button
                                    className="btn btn-secondary ml-3"
                                    disabled={loading}
                                    onClick={
                                        initialValues.id
                                            ? () =>
                                                  history.push(
                                                      `/event/${initialValues.id}`
                                                  )
                                            : () => history.push("/events")
                                    }
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withFirestore(
    connect(
        mapState,
        actions
    )(
        reduxForm({ form: "eventForm", validate, enableReinitialize: true })(
            EventForm
        )
    )
);
