import React from "react";
import { differenceInYears } from "date-fns/esm";
import { withGetScreen } from "react-getscreen";
import { NavLink } from "react-router-dom";

const UserDetailedHeader = ({ profile, isMobile }) => {
    let age;
    if (profile.dateOfBirth) {
        age = differenceInYears(Date.now(), profile.dateOfBirth.toDate());
    } else {
        age = "unknown age";
    }
    let city;
    if (profile.city) {
        city = profile.city.toString().substring(0, profile.city.indexOf(","));
    } else {
        city = "Location";
    }
    if (isMobile()) {
        return (
            <div className="card mb-3" style={{ width: "100%" }}>
                <span
                    style={{ width: "100%", display: "block" }}
                    className="pr-3 pt-3"
                >
                    <NavLink to="/_settings">
                        <svg
                            className="bi bi-pencil-square float-right "
                            width="1.8em"
                            height="1.8em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                                fillRule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                        </svg>
                    </NavLink>
                </span>
                <div className="row no-gutters mb-4">
                    <div className="col-md-2">
                        <img
                            src={profile.photoURL || "/assets/user.png"}
                            className="card-thumbnail mx-auto d-block"
                            style={{ borderRadius: "60px", width: "125px" }}
                            alt=""
                        />
                    </div>
                    <div className="col-md-10 ">
                        <div className="card-body mx-auto">
                            <div className="card-title h3 font-weight-bolder">
                                {profile.displayName || ""}
                            </div>
                            <div>
                                <div className="h4">Software developer</div>
                                <div className="h4">
                                    {age}, lives in <strong>{city}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="media bg-white p-4 mb-3">
            <img
                src={profile.photoURL || "/assets/user.png"}
                className="card-thumbnail mx-auto d-block"
                style={{ borderRadius: "60px", width: "100px" }}
                alt="..."
            />
            <div className="media-body ml-2">
                <div className=" h3 font-weight-bolder">
                    {profile.displayName || ""}
                </div>
                <div>
                    <div className="h4">Software developer</div>
                    <div className="h4">
                        {age}, lives in <strong>{city}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withGetScreen(UserDetailedHeader);
