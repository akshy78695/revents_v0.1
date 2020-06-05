import React from "react";
import { differenceInYears } from "date-fns/esm";

const UserDetailedHeader = ({ profile }) => {
    let age;
    if (profile.dateOfBirth) {
        age = differenceInYears(Date.now(), profile.dateOfBirth.toDate());
    } else {
        age = "unknown age";
    }
    let city;
    if (profile.city) { 
        city = (profile.city).toString().substring(0, profile.city.indexOf(","));
    } else {
        city = "Location";
    }
    return (
        <div className="card mb-3" style={{ width: "100%" }}>
            <div className="row no-gutters my-4">
                <div className="col-md-2">
                    <img
                        src={profile.photoURL || "/assets/user.png"}
                        className="card-thumbnail mx-auto d-block"
                        style={{ borderRadius: "60px", width: "125px" }}
                        alt=""
                    />
                </div>
                <div className="col-md-10">
                    <div className="card-body ">
                        <div className="card-title h3 font-weight-bolder">
                            {profile.displayName || ""}
                        </div>
                        <div>
                            <div className="h4">Software developer</div>
                            <div className="h4">
                                {age}, lives in{" "}
                                <strong>
                                    {city}
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailedHeader;
