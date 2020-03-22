import React, { Component } from "react";

export class EventForm extends Component {
    state = {
        title: "",
        date: "",
        city: "",
        venue: "",
        hostedBy: ""
    };

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
        } else {
            this.props.newEvent(this.state);
        }
    };
    render() {
        let { cancelForm } = this.props;
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
                                onClick={cancelForm}
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

export default EventForm;
