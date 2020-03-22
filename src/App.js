import React from "react";
import EventDashboard from "./app/features/event/EventDashboard";
import Navbar from "./app/features/navbar/Navbar";
import { Container } from "semantic-ui-react";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Container className="main">
                <EventDashboard />
            </Container>
        </React.Fragment>
    );
}

export default App;
