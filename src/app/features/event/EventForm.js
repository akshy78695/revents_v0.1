// FORMSY is react library like redux form
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
    composeValidators,
    combineValidators,
    hasLengthGreaterThan,
    isRequired,
} from "revalidate";
import { createEvent, updateEvent } from "./eventActions";
import cuid from "cuid";
import InputText from "../../common/form/InputText";
import InputTextarea from "../../common/form/InputTextarea";
import SelectInput from "../../common/form/SelectInput";
import InputDate from "../../common/form/InputDate";
import PlaceInput from "../../common/form/PlaceInput";

/*  
    http://api.openweathermap.org/data/2.5/weather?zip=401105,in&appid=d610bde57032cdc064598ffec1ea9f27

    http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d610bde57032cdc064598ffec1ea9f27
*/

/* 
// global google 
*/

const mapState = (state, ownProps) => {
    let eventId = ownProps.match.params.id;

    let event = { title: "", date: "", city: "", venue: "", hostedBy: "" };

    if (eventId && state.events.length > 0) {
        event = state.events.filter((event) => event.id === eventId)[0];
    }
    return { initialValues: event };
};

const actions = {
    createEvent,
    updateEvent,
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
        };
    }

    onSubmit = async (values) => {
        // warning for moment :Deprecation warning: value provided is not in a recognized RFC2822 or ISO
        //format. moment construction falls back to js Date(), which is not reliable across all browsers and
        //versions.
        // values.venueLatLng = this.state.venueLatLng;
        let onlyVenue = values.venue;
        onlyVenue = onlyVenue.substring(0, onlyVenue.indexOf(","));
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
                values.venueLatLng = undefined;
            });
        let time = new Date(values.date);
        values.date = time.toISOString();
        if (this.props.initialValues.id) {
            this.props.updateEvent(values);
            this.props.history.push(`/event/${this.props.initialValues.id}`);
        } else {
            let newEvent = {
                ...values,
                id: cuid(),
                hostPhotoURL:
                    "https://randomuser.me/api/portraits/med/men/22.jpg",
                attendees: [
                    {
                        id: "b",
                        name: "Tom",
                        photoURL:
                            "https://randomuser.me/api/portraits/thumb/women/22.jpg",
                    },
                    {
                        id: "a",
                        name: "Bob",
                        photoURL:
                            "https://randomuser.me/api/portraits/thumb/women/20.jpg",
                    },
                    {
                        id: "c",
                        name: "joe",
                        photoURL:
                            "https://randomuser.me/api/portraits/thumb/women/60.jpg",
                    },
                ],
            };
            this.props.createEvent(newEvent);
            this.props.history.push(`/event/${newEvent.id}`);
        }
    };
    render() {
        const {
            initialValues,
            history,
            invalid,
            submitting,
            pristine,
        } = this.props;
        return (
            <div className="col-md-12 mx-auto px-0 mb-4">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <label className="text-info">Event Details</label>
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
                                onClick={this.props.handleSubmit(this.onSubmit)}
                                // onClick={}
                                disabled={invalid || submitting || pristine}
                            >
                                Submit
                            </button>
                            <button
                                className="btn btn-secondary ml-3"
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
        );
    }
}

export default connect(
    mapState,
    actions
)(reduxForm({ form: "eventForm", validate })(EventForm));
