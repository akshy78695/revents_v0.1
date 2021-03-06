import React from "react";
import SettingNavbar from "./SettingNavbar";
import { Switch, Route, Redirect } from "react-router-dom";
import BasicPage from "./BasicPage";
import About from "./About";
import PhotosPage from "./photos/PhotosPage";
import Account from "./Account";
import { connect } from "react-redux";
import { updatePassword } from "../../auth/authActions";
import { updateProfile } from "../../user/userActions";
import { withGetScreen } from "react-getscreen";
const actions = {
    updatePassword,
    updateProfile,
};

const mapState = (state) => ({
    providerId:
        state.firebase.auth.isLoaded &&
        state.firebase.auth.providerData[0].providerId,
    user: state.firebase.profile,
});

const SettingsDashboard = ({
    updatePassword,
    providerId,
    user,
    updateProfile,
    isMobile,
}) => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-4">
                    {!isMobile() && <SettingNavbar />}
                </div>
                <div className="col-sm-8">
                    <Switch>
                        <Redirect
                            exact
                            from="/settings"
                            to="/settings/basic_settings"
                        />
                        <Route
                            path="/settings/basic_settings"
                            render={() => (
                                <BasicPage
                                    initialValues={user}
                                    updateProfile={updateProfile}
                                />
                            )}
                        />
                        <Route
                            path="/settings/about"
                            render={() => (
                                <About
                                    initialValues={user}
                                    updateProfile={updateProfile}
                                />
                            )}
                        />
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

export default connect(mapState, actions)(withGetScreen(SettingsDashboard));
