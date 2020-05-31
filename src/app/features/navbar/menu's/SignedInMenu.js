import React from "react";
import "../../../../App.css";
import { NavLink } from "react-router-dom";

const SignedInMenu = ({ onSignedOut, profile }) => {
    return (
        <div className="ml-auto mobileMargin nav-item dropdown">
            <a
                className="nav-link p-0 dropdown-toggle text-white"
                href="#!"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <img
                    // src={profile.photoURL || "https://randomuser.me/api/portraits/thumb/lego/2.jpg"}
                    src={profile.photoURL || "/assets/user.png"}
                    className="mr-3"
                    style={{ borderRadius: "50px", width: "40px" }}
                    alt=""
                />{" "}
                <span className="align-middle"></span> {profile.displayName}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#!">
                    <i className="fas fa-plus"></i>
                    &emsp;Create Event
                </a>
                <a className="dropdown-item" href="#!">
                    <i className="fas fa-calendar-week"></i>
                    &emsp;My Events
                </a>
                <a className="dropdown-item" href="#!">
                    <i className="fas fa-users"></i>
                    &ensp;&nbsp;My Network
                </a>
                <a className="dropdown-item" href="#!">
                    <i className="fas fa-user"></i>
                    &emsp;My profile
                </a>
                <NavLink
                    to="/settings"
                    style={{ padding: ".25rem 1.5rem" }}
                    className="dropdown-item text-dark"
                >
                    <i className="fas fa-cogs"></i>&ensp;&nbsp;Settings
                </NavLink>
                {/* <NavLink to="/settings">
                    <a class="dropdown-item text-dark">
                        <i className="fas fa-cogs"></i>&ensp;&nbsp;Settings
                    </a>
                </NavLink> */}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#!" onClick={onSignedOut}>
                    <i className="fas fa-power-off"></i>&emsp;Log out
                </a>
            </div>
        </div>
    );
};

export default SignedInMenu;
