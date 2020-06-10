import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import InputTextarea from "../../../../common/form/InputTextarea";

export class EventDetailedChatForm extends Component {
    handleCommentSubmit = (values) => {
        const {
            addEventComment,
            eventId,
            reset,
            closeForm,
            parentId,
        } = this.props;
        addEventComment(eventId, values, parentId);
        reset();
        if (parentId !== 0) {
            closeForm();
        }
    };
    render() {
        return (
            <form
                className="row"
                onSubmit={this.props.handleSubmit(this.handleCommentSubmit)}
            >
                <div className="col-12 px-4 mb-5">
                    <Field
                        name="comment"
                        type="text"
                        className="form-control"
                        rows="2"
                        component={InputTextarea}
                    />
                    <button className="btn btn-primary mt-3">
                        <i className="fas fa-edit"></i>
                        <span className="font-weight-bold"> Add replay</span>
                    </button>
                </div>
                {/* <div className="col-1"></div>
                <div className="col-1"></div> */}
            </form>
        );
    }
}

export default reduxForm({ Field: "comment" })(EventDetailedChatForm);
