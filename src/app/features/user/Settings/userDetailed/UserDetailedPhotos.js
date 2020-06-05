import React from "react";
import { Image } from "semantic-ui-react";
import LazyLoad from "react-lazyload";

const UserDetailedPhotos = ({ photos }) => {
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
                <div className="row no-gutters px-3">
                    {photos &&
                        photos.map((photo, i) => (
                            <div
                                className="col-md-3 float-left py-3 px-1"
                                style={{ width: "fit-content" }}
                                key={i}
                            >
                                <LazyLoad
                                    height={150}
                                    placeholder={
                                        <Image src="/assets/user.png" />
                                    }
                                >
                                    <Image
                                        src={photo.url}
                                        className="p-2"
                                        style={{
                                            margin: "auto",
                                            width: "150px",
                                            float: "left",
                                        }}
                                    />
                                </LazyLoad>
                            </div>
                        ))}
                </div>
            </div>
            <div className="col-md-3 pl-3"></div>
        </div>
    );
};

export default UserDetailedPhotos;
