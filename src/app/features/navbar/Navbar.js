import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-dark" style={{backgroundImage:`linear-gradient(to right, #99ff99, #4d79ff)`}}>
                <div className="container">
                    <div className="navbar-brand">
                        <img
                            src="./assets/logo.png"
                            width="30"
                            height="30"
                            class="d-inline-block align-top"
                            alt=""
                        />
                    </div>
                    <a
                        class="navbar-brand font-weight-bold text-white"
                        href="#!"
                    >
                        Re-vents
                    </a>
                    <button
                        className="navbar-toggler"
                        data-toggle="collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        data-target="#ul"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="ul">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a href="#!" className="nav-link ml-3 text-white">
                                    Events
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#!"
                                    className="nav-link ml-3 text-white"
                                >
                                    People
                                </a>
                            </li>
                        </ul>
                        <div
                            className="ml-auto"
                            style={{ fontFamily: "serif" }}
                        >
                            <button className="font-weight-bold btn btn-outline-light">
                                Sign In
                            </button>
                            <button className="font-weight-bold btn btn-outline-light mx-3">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
