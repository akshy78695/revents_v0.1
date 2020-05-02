import { createReducer } from "../../common/util/ReducerUtil";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

const initialState = [
    {
        id: "1",
        title: "Trip to Empire State building",
        date: "2018-03-21",
        category: "culture",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
        city: "NY, USA",
        venue: "Empire State Building, 5th Avenue, New York, NY, USA",
        venueLatLng: {
            lat: 40.7484405,
            lng: -73.98566440000002,
        },
        hostedBy: "Bob",
        hostPhotoURL: "https://randomuser.me/api/portraits/med/men/20.jpg",
        attendees: [
            {
                id: "a",
                name: "Bob",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/men/20.jpg",
            },
            {
                id: "b",
                name: "Tom",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/22.jpg",
            },
        ],
    },
    {
        id: "2",
        title: "Trip to Punch and Judy Pub",
        date: "2018-03-18",
        category: "drinks",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
        city: "London, UK",
        venue: "Punch & Judy, Henrietta Street, London, UK",
        venueLatLng: {
            lat: 51.5118074,
            lng: -0.12300089999996544,
        },
        hostedBy: "Tom",
        hostPhotoURL: "https://randomuser.me/api/portraits/med/men/22.jpg",
        attendees: [
            {
                id: "a",
                name: "Bob",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/men/20.jpg",
            },
            {
                id: "b",
                name: "Tom",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/23.jpg",
            },
            {
                id: "c",
                name: "jane",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/25.jpg",
            },
        ],
    },
    {
        id: "3",
        title: "Trip to New Delhi",
        date: "2018-03-18",
        category: "drinks",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
        city: "delhi, india",
        venue:
            "New Delhi, Bhavbhuti Marg, Ratan Lal Market, Kamla Market, Ajmeri Gate, New Delhi, Delhi, India",
        venueLatLng: {
            lat: 28.61,
            lng: 77.23,
        },
        hostedBy: "jerry",
        hostPhotoURL: "https://randomuser.me/api/portraits/med/women/24.jpg",
        attendees: [
            {
                id: "a",
                name: "Bob",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/men/19.jpg",
            },
            {
                id: "b",
                name: "Tom",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/26.jpg",
            },
            {
                id: "c",
                name: "jane",
                photoURL:
                    "https://randomuser.me/api/portraits/thumb/women/25.jpg",
            },
        ],
    },
];
// [
//     {
//         id: "1",
//         title: "Trip to Tower of London",
//         date: "2018-03-27",
//         category: "culture",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
//         city: "London, UK",
//         venue: "Tower of London, St Katharine's & Wapping, London",
//         hostedBy: "Bob",
//         hostPhotoURL: "https://randomuser.me/api/portraits/med/men/20.jpg",
//         attendees: [
//             {
//                 id: "a",
//                 name: "Bob",
//                 photoURL:
//                     "https://randomuser.me/api/portraits/thumb/women/25.jpg"
//             },
//             {
//                 id: "b",
//                 name: "Tom",
//                 photoURL:
//                     "https://randomuser.me/api/portraits/thumb/women/42.jpg"
//             }
//         ]
//     },
//     {
//         id: "2",
//         title: "Trip to Punch and Judy Pub",
//         date: "2018-03-28",
//         category: "drinks",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
//         city: "London, UK",
//         venue: "Punch & Judy, Henrietta Street, London, UK",
//         hostedBy: "Tom",
//         hostPhotoURL: "https://randomuser.me/api/portraits/med/men/22.jpg",
//         attendees: [
//             {
//                 id: "b",
//                 name: "Tom",
//                 photoURL:
//                     "https://randomuser.me/api/portraits/thumb/women/22.jpg"
//             },
//             {
//                 id: "a",
//                 name: "Bob",
//                 photoURL:
//                     "https://randomuser.me/api/portraits/thumb/women/20.jpg"
//             },
//             {
//                 id: "c",
//                 name: "joe",
//                 photoURL:
//                     "https://randomuser.me/api/portraits/thumb/women/60.jpg"
//             }
//         ]
//     },
//     {
//         id: "3",
//         title: "Trip to New Delhi",
//         date: "2018-03-28",
//         category: "drinks",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
//         city: "delhi, India",
//         venue: "new delhi, india",
//         hostedBy: "doe",
//         hostPhotoURL: "https://randomuser.me/api/portraits/med/men/28.jpg",
//         attendees: [
//             {
//                 id: "b",
//                 name: "Tom",
//                 photoURL:
//                     "https://randomuser.me/api/portraits/thumb/women/12.jpg"
//             },
//             {
//                 id: "a",
//                 name: "doe",
//                 photoURL:
//                     "https://randomuser.me/api/portraits/thumb/women/13.jpg"
//             },
//             {
//                 id: "c",
//                 name: "joe",
//                 photoURL:
//                     "https://randomuser.me/api/portraits/thumb/women/14.jpg"
//             }
//         ]
//     }
// ];

const createEvent = (state, payload) => {
    return [payload.event, ...state];
};

const updateEvent = (state, payload) => {
    return [
        payload.event,
        ...state.filter((event) => event.id !== payload.event.id),
    ];
};

const deleteEvent = (state, payload) => [
    ...state.filter((event) => event.id !== payload.eventId),
];

export default createReducer(initialState, {
    [CREATE_EVENT]: createEvent,
    [UPDATE_EVENT]: updateEvent,
    [DELETE_EVENT]: deleteEvent,
});
