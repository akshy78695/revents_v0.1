import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = () => (
    <svg
        className="bi bi-geo-alt"
        width="3em"
        color="red"
        height="3em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
        />
    </svg>
);

const EventDetailedMap = ({ lat, lng }) => {
    const zoom = 14;
    console.log(lat, lng)
    return (
        <div className="mt-1 p-0">
            <div style={{ height: "400px", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyCv3ZMZWpIEwhCXqsjhCyBqpRJwXUrJ_BI",
                    }}
                    defaultCenter={{ lat, lng }}
                    defaultZoom={zoom}
                >
                    <Marker lat={lat} lng={lng} />
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default EventDetailedMap;
