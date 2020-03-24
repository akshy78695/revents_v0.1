import React from "react";
import { Link } from "react-router-dom";

const SettingNavbar = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header bg-secondary h4 text-white">
                    <i className="fas fa-user"></i> Profile
                </div>
                <div className="list-group list-group-flush">
                    <Link to="/settings/basic_settings" className="list-group-item text-dark">Basics</Link>
                    <Link to="/settings/about" className="list-group-item text-dark">About me</Link>
                    <Link to="/settings/photos" className="list-group-item text-dark">My photos</Link>
                </div>
                <div className="card-header bg-secondary h4 text-white">
                    <i className="fas fa-cogs"></i> Account
                </div>
                <div className="list-group list-group-flush">
                    <Link to="/settings/account" className="list-group-item text-dark">My Account</Link>
                </div>
            </div>
        </div>
    );
};

export default SettingNavbar;
