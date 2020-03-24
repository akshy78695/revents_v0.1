import React from "react";
import "../../../../App.css";
import { Link, NavLink } from "react-router-dom";

const SignedInMenu = ({ onSignedOut }) => {
    return (
        <div class="ml-auto mobileMargin nav-item dropdown">
            <a
                class="nav-link p-0 dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <img
                    src="https://randomuser.me/api/portraits/thumb/women/31.jpg"
                    className="mr-3"
                    style={{ borderRadius: "50px", width: "40px" }}
                    alt=""
                />{" "}
                <span className="align-middle"></span> Username
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#!">
                    <i className="fas fa-plus"></i>
                    &emsp;Create Event
                </a>
                <a class="dropdown-item" href="#!">
                    <i className="fas fa-calendar-week"></i>
                    &emsp;My Events
                </a>
                <a class="dropdown-item" href="#!">
                    <i className="fas fa-users"></i>
                    &ensp;&nbsp;My Network
                </a>
                <a class="dropdown-item" href="#!">
                    <i className="fas fa-user"></i>
                    &emsp;My profile
                </a>
                <NavLink to="/settings">
                    <a class="dropdown-item text-dark">
                        <i className="fas fa-cogs"></i>&ensp;&nbsp;Settings
                    </a>
                </NavLink>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#!" onClick={onSignedOut}>
                    <i className="fas fa-power-off"></i>&emsp;Log out
                </a>
            </div>
        </div>
    );
};

export default SignedInMenu;
