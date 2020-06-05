import React from "react";
import { format } from "date-fns/esm";

const UserDetailedInfo = ({ profile, currentUser }) => {
    let city;
    if (profile.city) {
        city = profile.city.toString().substring(0, profile.city.indexOf(","));
    } else {
        city = "";
    }
    let time;
    if (profile.createdAt) {
        let createdAt = new Date(profile.createdAt.seconds);
        time = format(createdAt, "d LLL yyyy");
    } else {
        time = "";
    }
    let interests;
    if (profile.interests) {
        interests = profile.interests;
    } else {
        interests = null;
    }
    return (
        <div className="row no-gutters">
            <div className="col-md-9 pr-3 bg-white">
                <div className="row no-gutters">
                    <div className="col-md-8 p-3">
                        <div className="pl-2">
                            <i className="align-middle far fa-smile fa-3x pr-2 py-2"></i>
                            <span className="align-middle h3">
                                About <strong>{profile.displayName}</strong>
                            </span>
                            <p className="py-2">
                                I am a : <strong>Software developer</strong>
                            </p>
                            <p className="pb-2">
                                Originally From : <strong>{city}</strong>
                            </p>
                            <p className="pb-2">
                                Member since : <strong>{time}</strong>
                            </p>
                            {profile.about ? (
                                <p className="pb-2">{profile.about}</p>
                            ) : (
                                <p className="pb-2">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Unde ducimus itaque sunt!
                                    In eius iusto neque molestias repudiandae
                                    ipsam facere maiores modi repellendus culpa
                                    necessitatibus officia, rerum aperiam
                                    adipisci quae!
                                </p>
                            )}
                        </div>
                        <div className="px-2"></div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div className="py-2 px-2">
                            <i className="align-middle fa fa-heart fa-3x"></i>
                            <span className="align-middle pl-2 h3">
                                Interests
                            </span>
                        </div>
                        {interests &&
                            interests.map((interest, i) => (
                                <div className="py-2 px-2" key={i}>
                                    <i className="align-middle far fa-heart fa-2x"></i>
                                    <span className="align-middle pl-2 h5">
                                        {interest}
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="col-md-3 pl-3">
                <div className="bg-white">
                    <div className="p-3">
                        {currentUser ? (
                            <div className="btn btn-outline-info btn-block disabled">
                                Edit Profile
                            </div>
                        ) : (
                            <div className="btn btn-outline-info btn-block disabled">
                                Follow User
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailedInfo;
