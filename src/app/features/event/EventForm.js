import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "./eventActions";
import cuid from "cuid";

const mapState = (state, ownProps) => {
    let eventId = ownProps.match.params.id;

    let event = { title: "", date: "", city: "", venue: "", hostedBy: "" };

    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0];
    }
    return { event };
};

const actions = {
    createEvent,
    updateEvent
};
export class EventForm extends Component {
    state = { ...this.props.event };

    componentDidMount() {
        if (this.props.selectdEvent !== null) {
            this.setState({
                ...this.props.selectedEvent
            });
        }
    }
    onInputChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        if (this.state.id) {
            this.props.updateEvent(this.state);
            this.props.history.push(`/event/${this.state.id}`);
        } else {
            let newEvent = {
                ...this.state,
                id: cuid(),
                hostPhotoURL:
                    "https://randomuser.me/api/portraits/med/men/22.jpg",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
                attendees: [
                    {
                        id: "b",
                        name: "Tom",
                        photoURL:
                            "https://randomuser.me/api/portraits/thumb/women/22.jpg"
                    },
                    {
                        id: "a",
                        name: "Bob",
                        photoURL:
                            "https://randomuser.me/api/portraits/thumb/women/20.jpg"
                    },
                    {
                        id: "c",
                        name: "joe",
                        photoURL:
                            "https://randomuser.me/api/portraits/thumb/women/60.jpg"
                    }
                ]
            };
            this.props.createEvent(newEvent);
            this.props.history.push("/events");
        }
    };
    render() {
        let { title, date, city, venue, hostedBy } = this.state;
        return (
            <div className="col-md-12 mx-auto px-0 mb-4">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <label>Event Title</label>
                            <input
                                name="title"
                                type="text"
                                value={title}
                                onChange={this.onInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Event Date</label>
                            <input
                                name="date"
                                type="date"
                                value={date}
                                onChange={this.onInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input
                                name="city"
                                type="text"
                                onChange={this.onInputChange}
                                value={city}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Venue</label>
                            <input
                                name="venue"
                                type="text"
                                onChange={this.onInputChange}
                                value={venue}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Hosted By</label>
                            <input
                                name="hostedBy"
                                type="text"
                                onChange={this.onInputChange}
                                value={hostedBy}
                                className="form-control"
                            />
                        </div>
                        <div className="float-right">
                            <button
                                className="btn btn-primary"
                                onClick={this.onSubmit}
                            >
                                Submit
                            </button>
                            <button
                                className="btn btn-secondary ml-3"
                                onClick={this.props.history.goBack}
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

export default connect(mapState, actions)(EventForm);
