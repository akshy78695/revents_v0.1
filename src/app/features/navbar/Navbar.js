import React, { Component, Fragment } from "react";
import "../../../App.css";
import { withFirebase } from "react-redux-firebase";
import { NavLink, withRouter } from "react-router-dom";
import SignedOutMenu from "./menu's/SignedOutMenu";
import SignedInMenu from "./menu's/SignedInMenu";
import { connect } from "react-redux";
import { openModal } from "../modals/ModalActions";
import { withGetScreen } from "react-getscreen";

const actions = {
    openModal,
};

const mapState = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
});
class Navbar extends Component {
    handleSignIn = () => {
        this.props.openModal("LoginModal");
    };
    handleRegister = () => {
        this.props.openModal("RegisterModal");
    };
    handleSignOut = () => {
        this.props.firebase.logout();
        this.props.history.push("/");
    };
    render() {
        const { auth, profile, isMobile } = this.props;
        const UserAuthenticated = auth.isLoaded && !auth.isEmpty;
        const UserNotAuthenticated = auth.isLoaded && auth.isEmpty;
        return (
            <nav className=" navbar navbar-top navbar-expand-sm navbar-light bg-dark sticky-top justify-content-center">
                <div className={`container`}>
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
                            <li
                                className="nav-item active"
                                data-toggle="collapse"
                                data-target=".navbar-collapse.show"
                            >
                                <NavLink
                                    to="/events"
                                    className="nav-link ml-3 text-white "
                                >
                                    Events
                                </NavLink>
                            </li>
                            {UserAuthenticated && (
                                <Fragment>
                                    <li
                                        className="nav-item "
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse.show"
                                    >
                                        <NavLink
                                            to="/create"
                                            className="nav-link ml-3 text-white"
                                        >
                                            {/* <button className="btn btn-outline-primary px-3 text-success nav-link">
                                    </button> */}
                                            Create Event
                                        </NavLink>
                                    </li>
                                </Fragment>
                            )}
                        </ul>
                        {!isMobile() && UserAuthenticated && (
                            <SignedInMenu
                                auth={auth}
                                profile={profile}
                                onSignedOut={this.handleSignOut}
                            />
                        )}
                        {UserNotAuthenticated && (
                            <SignedOutMenu
                                onSignedIn={this.handleSignIn}
                                register={this.handleRegister}
                            />
                        )}
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(
    withFirebase(connect(mapState, actions)(withGetScreen(Navbar)))
);
