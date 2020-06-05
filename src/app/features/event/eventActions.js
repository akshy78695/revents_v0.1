import { toastr } from "react-redux-toastr";
import { createNewEvent } from "../../common/util/helpers";

export const createEvent = (event) => {
    return async (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        const user = firebase.auth().currentUser;
        const photoURL = getState().firebase.profile.photoURL;
        const newEvent = createNewEvent(user, photoURL, event);
        try {
            let createdEvent = await firestore.add("events", newEvent);
            await firestore.set(
                `event_attendees/${createdEvent.id}_${user.uid}`,
                {
                    eventId: createdEvent.id,
                    userId: user.uid,
                    eventDate: event.date,
                    host: true,
                }
            );

            toastr.success("Success!", "Event Has Created");
            return createdEvent;
        } catch (e) {
            console.log(e);
            toastr.error(" something went wrong!", "Event Not created!");
        }
    };
};

export const updateEvent = (event) => {
    return async (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        try {
            await firestore.update(`events/${event.id}`, event);
            toastr.success("Success!", "Event Has Updated");
        } catch (e) {
            toastr.error("something went wrong!", "Event Not Updated!");
        }
    };
};

export const cancelToggle = (cancelled, eventId) => async (
    dispatch,
    getState,
    { getFirestore }
) => {
    const firestore = getFirestore();
    const message = cancelled
        ? "Do you want to cancel this event?"
        : "Reactivate the event?";
    try {
        toastr.confirm(message, {
            onOk: async () =>
                await firestore.update(`events/${eventId}`, {
                    cancelled: cancelled,
                }),
        });
    } catch (e) {
        console.log(e);
    }
};
