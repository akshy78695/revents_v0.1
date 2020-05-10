import React, { useState } from "react";
import EventDetailedMap from "./EventDetailedMap";


// https://www.google.com/maps?q=19.120127999999998,72.8891392


const EventDetailedInfo = ({ event }) => {
    const [isMapOpen, setToggleMap] = useState(false);
    let { description, date, venue, venueLatLng } = event;

    return (
        <div>
            <div className="card my-4">
                <div className="card-body">
                    <span>
                        <svg
                            className="bi bi-info-square"
                            width="1.5em"
                            height="1.5em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"
                                clipRule="evenodd"
                            />
                            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                            <circle cx="8" cy="4.5" r="1" />
                        </svg>
                    </span>
                    <span className="h5 ml-3 align-middle">{description}</span>
                </div>
                <div className="card-body border-top">
                    <span>
                        <svg
                            className="bi bi-calendar"
                            width="1.5em"
                            height="1.5em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    <span className="h5 ml-3 align-middle">{date}</span>
                </div>
                <div className="card-body border-top p-0">
                    <div className="p-3">
                        <span>
                            <svg
                                className="bi bi-map"
                                width="1.5em"
                                height="1.5em"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15.817.613A.5.5 0 0116 1v13a.5.5 0 01-.402.49l-5 1a.502.502 0 01-.196 0L5.5 14.51l-4.902.98A.5.5 0 010 15V2a.5.5 0 01.402-.49l5-1a.5.5 0 01.196 0l4.902.98 4.902-.98a.5.5 0 01.415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <span className="h5 ml-3 align-middle">{venue}</span>
                        <button
                            className="btn btn-info btn-sm float-right align-middle"
                            onClick={() => setToggleMap(!isMapOpen)}
                        >
                            {isMapOpen ? (
                                <span>Close Map</span>
                            ) : (
                                <span>Show Map</span>
                            )}
                        </button>
                        <br />
                        <br />
                        {!venueLatLng && (
                            <span className="float-right text-danger">
                                Sorry! map not available
                            </span>
                        )}
                    </div>
                    {isMapOpen && (
                        <EventDetailedMap
                            lat={venueLatLng ? venueLatLng.lat : 90.0}
                            lng={venueLatLng ? venueLatLng.lng : 45.0}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventDetailedInfo;
