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

class App extends Component {
    // console.log(this.props)
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={HomePage} />
                <Route
                    path="/(.+)"
                    render={() => (
                        <React.Fragment>
                            <Navbar />
                            <Container className="main">
                                <Switch key={this.props.location.key}>
                                    <Route
                                        path="/peoples"
                                        component={PeoplesDashboard}
                                    />
                                    <Route
                                        path="/events"
                                        component={EventDashboard}
                                    />
                                    <Route
                                        path={["/create", "/manage/:id"]}
                                        component={EventForm}
                                    />
                                    <Route
                                        path="/settings"
                                        component={SettingsDashboard}
                                    />
                                    <Route
                                        path="/test"
                                        component={TestComponent}
                                    />
                                    <Route
                                        path="/event/:id"
                                        component={EventDetailedPage}
                                    />
                                </Switch>
                            </Container>
                        </React.Fragment>
                    )}
                />
            </React.Fragment>
        );
    }
}

export default withRouter(App);
