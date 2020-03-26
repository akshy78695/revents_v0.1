import React, { Component } from "react";
import "../../../App.css";
import { NavLink, withRouter } from "react-router-dom";
import SignedOutMenu from "./menu's/SignedOutMenu";
import SignedInMenu from "./menu's/SignedInMenu";

class Navbar extends Component {
    state = {
        UserAuthentication: true
    };
    handleSignIn = () => {
        this.setState({
            UserAuthentication: true
        });
    };
    handleSignOut = () => {
        this.setState({
            UserAuthentication: false
        });
        this.props.history.push("/");
    };
    render() {
        return (
            <nav className=" navbar navbar-expand-md navbar-light bg-dark">
                <div className="container">
                    <div className="navbar-brand">
                        <img
                            src="./assets/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </div>
                    <NavLink
                        to="/"
                        exact
                        className="navbar-brand font-weight-bold text-white"
                    >
                        Re-vents
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        data-toggle="collapse"
                        aria-controls="ul"
                        aria-expanded="false"
                        data-target="#ul"
                        style={{ outline: "none" }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="ul">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink
                                    to="/events"
                                    className="nav-link ml-3 text-white "
                                >
                                    Events
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/peoples"
                                    className="nav-link ml-3 text-white"
                                >
                                    People
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/test"
                                    className="nav-link ml-3 text-white"
                                >
                                    test
                                </NavLink>
                            </li>
                            <li className="nav-item createButtonMargin">
                                <NavLink
                                    to="/create"
                                    className="nav-link ml-3 text-white"
                                >
                                    {/* <button className="btn btn-outline-primary px-3 text-success nav-link">
                                    </button> */}
                                    Create Event
                                </NavLink>
                            </li>
                        </ul>
                        {this.state.UserAuthentication ? (
                            <SignedInMenu onSignedOut={this.handleSignOut} />
                        ) : (
                            <SignedOutMenu onSignedIn={this.handleSignIn} />
                        )}
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);
