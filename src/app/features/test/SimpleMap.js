import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = () => (
    <svg
        className="bi bi-geo-alt"
        width="1em"
        height="1em"
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

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 48.68,
            lng: 50.12,
        },
        zoom: 11,
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "400px", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyCv3ZMZWpIEwhCXqsjhCyBqpRJwXUrJ_BI"
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent lat={8.68} lng={50.12} />
                </GoogleMapReact>
                <div style={{height:"300px"}}></div>
            </div>
        );
    }
}

export default SimpleMap;
