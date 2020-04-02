import { createReducer } from "../../common/util/ReducerUtil";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

const initialState = [
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

const createEvent = (state, payload) => {
    return [payload.event, ...state];
};

const updateEvent = (state, payload) => {
    return [
        payload.event,
        ...state.filter(event => event.id !== payload.event.id)
    ];
};

const deleteEvent = (state, payload) => [
    ...state.filter(event => event.id !== payload.eventId)
];

export default createReducer(initialState, {
    [CREATE_EVENT]: createEvent,
    [UPDATE_EVENT]: updateEvent,
    [DELETE_EVENT]: deleteEvent
});
