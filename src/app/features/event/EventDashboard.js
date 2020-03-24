import React, { Component } from "react";
import EventList from "./EventList";
import EventForm from "./EventForm";
import { v1 as uuid } from "uuid";

// Users Array
const events = [
    {
        id: "1",
        title: "Trip to Tower of London",
        date: "2018-03-27",
        category: "culture",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
        city: "London, UK",
        venue: "Tower of London, St Katharine's & Wapping, London",
        hostedBy: "Bob",
        hostPhotoURL: "https://randomuser.me/api/portraits/med/men/20.jpg",
        attendees: [
            {
                id: "a",
                name: "Bob",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/25.jpg"
            },
            {
                id: "b",
                name: "Tom",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/42.jpg"
            }
        ]
    },
    {
        id: "2",
        title: "Trip to Punch and Judy Pub",
        date: "2018-03-28",
        category: "drinks",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
        city: "London, UK",
        venue: "Punch & Judy, Henrietta Street, London, UK",
        hostedBy: "Tom",
        hostPhotoURL: "https://randomuser.me/api/portraits/med/men/22.jpg",
        attendees: [
            {
                id: "b",
                name: "Tom",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/22.jpg"
            },
            {
                id: "a",
                name: "Bob",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/20.jpg"
            },
            {
                id: "c",
                name: "joe",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/60.jpg"
            }
        ]
    },
    {
        id: "3",
        title: "Trip to New Delhi",
        date: "2018-03-28",
        category: "drinks",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
        city: "delhi, India",
        venue: "new delhi, india",
        hostedBy: "doe",
        hostPhotoURL: "https://randomuser.me/api/portraits/med/men/28.jpg",
        attendees: [
            {
                id: "b",
                name: "Tom",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/12.jpg"
            },
            {
                id: "a",
                name: "Bob",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/13.jpg"
            },
            {
                id: "c",
                name: "joe",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/14.jpg"
            }
        ]
    }
];
class EventDashboard extends Component {
    state = {
        events: events,
        selectEvent: null,
        isOpen: false
    };
    onFormOpen = () => {
        this.setState({
            isOpen: true,
            selectEvent: null
        });
    };
    onCancelForm = () => {
        this.setState({
            isOpen: false
        });
    };
    handleSelectEvent = event => {
        console.log(event);
        this.setState({
            selectEvent: event,
            isOpen: true
        });
    };
    handleUpdateEvent = (updatedEvent) => {
        this.setState(({events}) => ({
            events : events.map(event => {
                if(updatedEvent.id === event.id){
                    return {...updatedEvent};
                }else{
                    return event;
                }
            }),
            isOpen: false,
            selectEvent: null
        }))
    }
    handleDeleteEvent = id => {
        this.setState(({events}) => ({
            events: events.filter(e => e.id !== id)
        }));
    }
    onCreateNewEventHandle = event => {
        event.id = uuid();
        event.hostPhotoURL = "./assets/user.png";
        event.description =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt";
        event.attendees = [];
        this.setState(({ events }) => ({
            events: [event, ...events],
            isOpen: false
        }));
    };
    render() {
        let { events, isOpen, selectEvent } = this.state;
        return (
            <React.Fragment>
                <div className="d-md-none d-sm-block d-xs-block d-lg-none">
                    <button
                        className="btn-info btn ml-4 mb-4"
                        onClick={this.onFormOpen}
                    >
                        Create Event
                    </button>
                    {isOpen && (
                        <EventForm
                            key={selectEvent ? selectEvent.id : 0}
                            updateEvent={this.handleUpdateEvent}
                            selectedEvent={selectEvent}
                            newEvent={this.onCreateNewEventHandle}
                            cancelForm={this.onCancelForm}
                        />
                    )}
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <EventList
                            events={events}
                            selectEvent={this.handleSelectEvent}
                            deleteEvent={this.handleDeleteEvent}
                        />
                    </div>
                    <div className="col-md-5 d-none d-md-block d-lg-block d-sm-none d-xs-none">
                        <button
                            className="btn-info btn ml-4 mb-4"
                            onClick={this.onFormOpen}
                        >
                            Create Event
                        </button>
                        {isOpen && (
                            <EventForm
                                key={selectEvent ? selectEvent.id : 0}
                                updateEvent={this.handleUpdateEvent}
                                selectedEvent={selectEvent}
                                newEvent={this.onCreateNewEventHandle}
                                cancelForm={this.onCancelForm}
                            />
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EventDashboard;
