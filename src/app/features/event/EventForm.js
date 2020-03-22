import React, { Component } from 'react'

export class EventForm extends Component {
    render() {
        let {cancelForm} = this.props;
        return (
            <div className="col-md-12 mx-auto px-0 mb-4">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <label>Event Title</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Event Date</label>
                            <input type="date" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Venue</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Hosted By</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="float-right">
                            <button className="btn btn-primary">Submit</button>
                            <button className="btn btn-secondary ml-3" onClick={cancelForm}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventForm
