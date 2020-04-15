import React from "react";
import ChatSnippet from "./ChatSnippet";

const EventDetailedChat = () => {
    return (
        <div className="card mb-5">
            <div className="card-header h3 text-center bg-info text-white">
                Comments
            </div>

            <ChatSnippet name="matt" comment="How artistic" />
            <ChatSnippet
                name="akshay"
                comment="that was useful for my project"
            />
            <ChatSnippet name="akshay" comment="go to hell" />
            <div className="card-body">
                <textarea
                    name=""
                    className="form-control"
                    id=""
                    cols="30"
                    rows="4"
                ></textarea>
                <button className="btn btn-primary mt-3">
                    <i className="fas fa-edit"></i>
                    <span className="font-weight-bold">  Add replay</span>
                </button>
            </div>
        </div>
    );
};

export default EventDetailedChat;
