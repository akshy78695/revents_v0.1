import React from "react";

const EventDetailedSidebar = ({ attendees }) => {
    console.log(attendees);
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header bg-info">
                    <div className="text-center text-white font-weight-bold">
                        {attendees && attendees.length} {attendees && attendees.length === 1 ? "person": "people"} Going
                    </div>
                </div>
            </div>
            <div className="card-body pt-2">
                {attendees &&
                    attendees.map(attendee => (
                        <div key={attendee.id} className="row my-2">
                            <div className="col-2 p-0 pl-2">
                                <img src={attendee.photoURL} style={{width:"90%",borderRadius:"50px"}}alt="" />
                            </div>
                            <div
                                className="col-10"
                                style={{ display: "block", margin: "auto" }}
                            >
                                <span className="h6 font-weight-bold">
                                    {attendee.name}
                                </span>
                            </div>
                        </div>
                    ))}

                {/* <div className="row border-top">
                    <div className="col-2 p-0 pl-2">
                        <img
                            style={{ width: "25px" }}
                            src="https://www.freeiconspng.com/uploads/computer-user-icon-2.png"
                            alt=""
                        />
                    </div>
                    <div
                        className="col-10"
                        style={{ display: "block", margin: "auto" }}
                    >
                        <span className="h6 font-weight-bold">brad pitt</span>
                    </div>
                </div> */}
            </div>
        </React.Fragment>
    );
};

export default EventDetailedSidebar;
