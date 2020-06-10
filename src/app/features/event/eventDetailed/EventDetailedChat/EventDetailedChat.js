import React, { Component } from "react";
import EventDetailedChatForm from "./EventDetailedChatForm";
import { Link } from "react-router-dom";
import formatDistance from "date-fns/formatDistance";

export class EventDetailedChat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showReply: false,
            showCommentId: null,
        };
    }
    handleReplyForm = (id) => {
        this.setState({
            showReply: true,
            showCommentId: id,
        });
    };

    handleCloseReplyForm = () => {
        this.setState({
            showCommentId: null,
            showReply: false,
        });
    };
    render() {
        const { eventChat, addEventComment, eventId } = this.props;
        const { showReply, showCommentId } = this.state;
        return (
            <div className="bg-white p-4 mb-5">
                {eventChat &&
                    eventChat.map((comment) => (
                        <div className="media mb-3" key={comment.id}>
                            <img
                                src={comment.photoURL || "/assets/user.png"}
                                className="mr-2 rounded-circle"
                                width="35px"
                                alt="..."
                            />
                            <div className="media-body">
                                <div className="mt-0 mb-1 h5">
                                    <Link to={`/profile/${comment.uid}`}>
                                        {comment.displayName}{" "}
                                    </Link>
                                    <span className="text-secondary h6">
                                        {`${formatDistance(
                                            comment.date,
                                            Date.now()
                                        )} ago`}
                                    </span>
                                </div>
                                <div>{comment.text}</div>
                                <div
                                    className="btn btn-link text-secondary p-0"
                                    onClick={this.handleReplyForm.bind(
                                        this,
                                        comment.id
                                    )}
                                >
                                    Reply
                                </div>
                                {showReply && showCommentId === comment.id && (
                                    <EventDetailedChatForm
                                        addEventComment={addEventComment}
                                        eventId={eventId}
                                        form={`reply_${comment.id}`}
                                        closeForm={this.handleCloseReplyForm}
                                        parentId={comment.id}
                                    />
                                )}

                                {comment.childNodes &&
                                    comment.childNodes.map((child) => (
                                        <div
                                            className="media mb-3"
                                            key={child.id}
                                        >
                                            <img
                                                src={
                                                    child.photoURL ||
                                                    "/assets/user.png"
                                                }
                                                className="mr-2 rounded-circle"
                                                width="35px"
                                                alt="..."
                                            />
                                            <div className="media-body">
                                                <div className="mt-0 mb-1 h5">
                                                    <Link
                                                        to={`/profile/${child.uid}`}
                                                    >
                                                        {child.displayName}{" "}
                                                    </Link>
                                                    <span className="text-secondary h6">
                                                        {`${formatDistance(
                                                            child.date,
                                                            Date.now()
                                                        )} ago`}
                                                    </span>
                                                </div>
                                                <div>{child.text}</div>
                                                <div
                                                    className="btn btn-link text-secondary p-0"
                                                    onClick={this.handleReplyForm.bind(
                                                        this,
                                                        child.id
                                                    )}
                                                >
                                                    Reply
                                                </div>
                                                {showReply &&
                                                    showCommentId ===
                                                        child.id && (
                                                        <EventDetailedChatForm
                                                            addEventComment={
                                                                addEventComment
                                                            }
                                                            eventId={eventId}
                                                            form={`reply_${child.id}`}
                                                            closeForm={
                                                                this
                                                                    .handleCloseReplyForm
                                                            }
                                                            parentId={
                                                                child.parentId
                                                            }
                                                        />
                                                    )}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                <EventDetailedChatForm
                    addEventComment={addEventComment}
                    eventId={eventId}
                    form={"newComment"}
                    parentId={0}
                />
            </div>
        );
    }
}

export default EventDetailedChat;
