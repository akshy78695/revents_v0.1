import React from "react";
import SettingNavbar from "./SettingNavbar";
import { Switch, Route, Redirect } from "react-router-dom";
import BasicPage from "./BasicPage";
import About from "./About";
import PhotosPage from "./PhotosPage";
import Account from "./Account";
import { connect } from "react-redux";
import { updatePassword } from "../../auth/authActions";
const actions = {
    updatePassword,
};

const mapState = (state) => ({
    providerId:
        state.firebase.auth.isLoaded &&
        state.firebase.auth.providerData[0].providerId,
});

const SettingsDashboard = ({ updatePassword, providerId }) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <SettingNavbar />
                </div>
                <div className="col-md-8">
                    <Switch>
                        <Redirect
                            exact
                            from="/settings"
                            to="/settings/basic_settings"
                        />
                        <Route
                            path="/settings/basic_settings"
                            component={BasicPage}
                        />
                        <Route path="/settings/about" component={About} />
                        <Route path="/settings/photos" component={PhotosPage} />
                        <Route
                            path="/settings/account"
                            render={() => (
                                <Account
                                    updatePassword={updatePassword}
                                    providerId={providerId}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default connect(mapState, actions)(SettingsDashboard);
