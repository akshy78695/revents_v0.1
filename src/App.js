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
// import "./App.css";

class App extends Component {
    // console.log(this.props)
    render() {
        return (
            <React.Fragment>
                <ModalManager />
                <Route exact path="/" component={HomePage} />
                <Route
                    path="/(.+)"
                    render={() => (
                        <div>
                            <Navbar />
                            <Container className={`main`}>
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
                                </Switch>
                            </Container>
                        </div>
                    )}
                />
            </React.Fragment>
        );
    }
}

export default withRouter(App);
