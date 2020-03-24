import React from "react";
import EventDashboard from "./app/features/event/EventDashboard";
import Navbar from "./app/features/navbar/Navbar";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./app/features/Home/HomePage";
import EventForm from "./app/features/event/EventForm";
import PeoplesDashboard from "./app/features/user/PeoplesDashboard/PeoplesDashboard";
import SettingsDashboard from "./app/features/user/Settings/SettingsDashboard";

function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={HomePage} />
                <Route
                    path="/(.+)"
                    render={() => (
                        <React.Fragment>
                            <Navbar />
                            <Container className="main">
                                <Route
                                    path="/peoples"
                                    component={PeoplesDashboard}
                                />
                                <Route
                                    path="/events"
                                    component={EventDashboard}
                                />
                                <Route path="/create" component={EventForm} />
                                <Route path="/settings" component={SettingsDashboard} />
                            </Container>
                        </React.Fragment>
                    )}
                />
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
