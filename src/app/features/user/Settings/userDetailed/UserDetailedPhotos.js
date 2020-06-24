import React from "react";
import { Image } from "semantic-ui-react";
import LazyLoad from "react-lazyload";
import { withGetScreen } from "react-getscreen";

const UserDetailedPhotos = ({ photos, isMobile }) => {
    return (
        <div className="row no-gutters my-3">
            <div className="col-md-9 pr-3 bg-white">
                <div className="p-3">
                    <div className="px-2">
                        <i className="far fa-images fa-2x align-middle"></i>
                        <span className="align-middle h3 font-weight-bold pl-2">
                            Photos
                        </span>
                    </div>
                </div>
                <div
                    className={`row no-gutters ${
                        isMobile() ? "px-0" : "px-3"
                    } `}
                >
                    <div className="py-3 px-1" style={{ width: "fit-content" }}>
                        {photos &&
                            photos.map((photo, i) => (
                                <LazyLoad
                                    key={i}
                                    height={150}
                                    placeholder={
                                        <Image src="/assets/blank.jpg" />
                                    }
                                >
                                    <Image
                                        src={photo.url}
                                        className="p-2"
                                        style={{
                                            margin: "auto",
                                            width: "140px",
                                            float: "left",
                                        }}
                                    />
                                </LazyLoad>
                            ))}
                    </div>
                </div>
            </div>
            <div className="col-md-3 pl-3"></div>
        </div>
    );
};

export default withGetScreen(UserDetailedPhotos);
