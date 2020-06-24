import React, { Component, Fragment } from "react";
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
            <Fragment>
                <div className="bg-info text-center py-2">
                    <span className="align-middle text-white">
                        <svg
                            className="bi bi-chat-dots"
                            width="2em"
                            height="2em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                            />
                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </span>
                    <span className="align-middle text-white ml-2 h3">
                        Comments
                    </span>
                </div>
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
                                    {showReply &&
                                        showCommentId === comment.id && (
                                            <EventDetailedChatForm
                                                addEventComment={
                                                    addEventComment
                                                }
                                                eventId={eventId}
                                                form={`reply_${comment.id}`}
                                                closeForm={
                                                    this.handleCloseReplyForm
                                                }
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
                                                    alt=""
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
                                                                eventId={
                                                                    eventId
                                                                }
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
            </Fragment>
        );
    }
}

export default EventDetailedChat;
