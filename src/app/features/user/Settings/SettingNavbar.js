import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withGetScreen } from "react-getscreen";
import { withFirebase } from "react-redux-firebase";

const SettingNavbar = ({ isMobile, firebase, history }) => {
    const handleLogout = () => {
        firebase.logout();
        history.push("/");
    };
    return (
        <div className="container p-0">
            <div className="card">
                <div className="card-header bg-secondary h4 text-white">
                    <i className="fas fa-user"></i> Profile
                </div>
                <div className="list-group list-group-flush">
                    <Link
                        to="/settings/basic_settings"
                        className="list-group-item text-dark"
                    >
                        Basics{" "}
                        {isMobile() && (
                            <span className="float-right">
                                <svg
                                    className="bi bi-chevron-right"
                                    width="1.3em"
                                    height="1.3em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </span>
                        )}
                    </Link>
                    <Link
                        to="/settings/about"
                        className="list-group-item text-dark"
                    >
                        About me{" "}
                        {isMobile() && (
                            <span className="float-right">
                                <svg
                                    className="bi bi-chevron-right"
                                    width="1.3em"
                                    height="1.3em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </span>
                        )}
                    </Link>
                    <Link
                        to="/settings/photos"
                        className="list-group-item text-dark"
                    >
                        My photos{" "}
                        {isMobile() && (
                            <span className="float-right">
                                <svg
                                    className="bi bi-chevron-right"
                                    width="1.3em"
                                    height="1.3em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </span>
                        )}
                    </Link>
                </div>
                <div className="card-header bg-secondary h4 text-white">
                    <i className="fas fa-cogs"></i> Account
                </div>
                <div className="list-group list-group-flush">
                    <Link
                        to="/settings/account"
                        className="list-group-item text-dark"
                    >
                        My Account{" "}
                        {isMobile() && (
                            <span className="float-right">
                                <svg
                                    className="bi bi-chevron-right"
                                    width="1.3em"
                                    height="1.3em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </span>
                        )}
                    </Link>
                </div>
                {isMobile() && (
                    <div className="list-group list-group-flush">
                        <div
                            className="list-group-item text-dark"
                            onClick={handleLogout}
                        >
                            <span className="text-danger">Log Out </span>
                            <span className="float-right">
                                <svg
                                    className="bi bi-chevron-right"
                                    width="1.3em"
                                    height="1.3em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default withFirebase(withRouter(withGetScreen(SettingNavbar)));
