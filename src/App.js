import React, { Component } from "react";
import EventDashboard from "./app/features/event/EventDashboard";
import Navbar from "./app/features/navbar/Navbar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./app/features/Home/HomePage";
import EventForm from "./app/features/event/EventForm";
import PeoplesDashboard from "./app/features/user/PeoplesDashboard/PeoplesDashboard";
import SettingsDashboard from "./app/features/user/Settings/SettingsDashboard";
import TestComponent from "./app/features/test/TestComponent";
import EventDetailedPage from "./app/features/event/eventDetailed/EventDetailedPage";
import ModalManager from "./app/features/modals/ModalManager";
import UserDetailed from "./app/features/user/Settings/userDetailed/UserDetailed";
import { UserIsAuthenticated } from "./app/features/auth/authWrapper";
import NotFound from "./app/layout/NotFound";
import TabBar from "./app/features/tabbar/TabBar";
import EventActivity from "./app/features/event/eventActivity/EventActivity";
import { withGetScreen } from "react-getscreen";
import MobileSettings from "./app/features/user/Settings/mobileSettings/MobileSettings";
// import SettingNavbar from "./app/features/user/Settings/SettingNavbar";
// import "./App.css";

class App extends Component {
    // console.log(this.props)
    render() {
        const { isMobile } = this.props;
        return (
            <React.Fragment>
                <ModalManager />
                <Route exact path="/" component={HomePage} />
                <Route
                    path="/(.+)"
                    render={() => (
                        <div>
                            <Navbar />
                            {isMobile() && <TabBar />}
                            <Container
                                className={`main `}
                            >
                                <Switch key={this.props.location.key}>
                                    <Route
                                        path="/event/:id"
                                        component={EventDetailedPage}
                                    />
                                    <Route
                                        path="/test"
                                        component={TestComponent}
                                    />
                                    <Route
                                        path="/events"
                                        component={EventDashboard}
                                    />
                                    <Route
                                        path="/peoples"
                                        component={UserIsAuthenticated(
                                            PeoplesDashboard
                                        )}
                                    />
                                    <Route
                                        path="/profile/:id"
                                        component={UserIsAuthenticated(
                                            UserDetailed
                                        )}
                                    />
                                    <Route
                                        path={["/create", "/manage/:id"]}
                                        component={UserIsAuthenticated(
                                            EventForm
                                        )}
                                    />
                                    <Route
                                        path="/settings"
                                        component={UserIsAuthenticated(
                                            SettingsDashboard
                                        )}
                                    />
                                    <Route
                                        path="/_settings"
                                        component={UserIsAuthenticated(
                                            MobileSettings
                                        )}
                                    />
                                    <Route
                                        path="/recent_activity"
                                        component={EventActivity}
                                    />
                                    <Route component={NotFound} />
                                </Switch>
                            </Container>
                        </div>
                    )}
                />
            </React.Fragment>
        );
    }
}

export default withRouter(withGetScreen(App));
