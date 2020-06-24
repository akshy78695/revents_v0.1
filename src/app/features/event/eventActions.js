import { toastr } from "react-redux-toastr";
import { createNewEvent } from "../../common/util/helpers";
import firebase from "../../config/firebase";
import { FETCH_EVENT } from "./eventConstants";
import {
    asyncActionError,
    asyncActionFinish,
    asyncActionStart,
} from "../async/asyncActions";

export const createEvent = (event) => {
    return async (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        const photoURL = getState().firebase.profile.photoURL;
        const newEvent = createNewEvent(user, photoURL, event);
        try {
            dispatch(asyncActionStart());
            let createdEvent = await firestore.add("events", newEvent);
            await firestore.set(
                `event_attendees/${createdEvent.id}_${user.uid}`,
                {
                    eventId: createdEvent.id,
                    userUid: user.uid,
                    eventDate: event.date,
                    host: true,
                }
            );
            toastr.success("Success!", "Event Has Created");
            dispatch(asyncActionFinish());
            return createdEvent;
        } catch (e) {
            console.log(e);
            dispatch(asyncActionError());
            toastr.error(" something went wrong!", "Event Not created!");
        }
    };
};

export const updateEvent = (event) => {
    return async (dispatch, getState) => {
        const firestore = firebase.firestore();
        try {
            dispatch(asyncActionStart());
            let eventDocRef = firestore.collection("events").doc(event.id);
            let dateEqual = getState().firestore.ordered.events[0].date.isEqual(
                event.date
            );
            if (!dateEqual) {
                let batch = firestore.batch();
                batch.update(eventDocRef, event);

                let eventAttendeeRef = firestore.collection("event_attendees");
                let eventAttendeeQuery = await eventAttendeeRef.where(
                    "eventId",
                    "==",
                    event.id
                );
                let eventAttendeeQuerySnap = await eventAttendeeQuery.get();
                for (let i = 0; i < eventAttendeeQuerySnap.docs.length; i++) {
                    let eventAttendeeDocRef = await firestore
                        .collection("event_attendees")
                        .doc(eventAttendeeQuerySnap.docs[i].id);
                    batch.update(eventAttendeeDocRef, {
                        eventDate: event.date,
                    });
                }

                await batch.commit();
            } else {
                await eventDocRef.update(event);
            }
            dispatch(asyncActionFinish());
            toastr.success("Success!", "Event Has Updated");
        } catch (e) {
            console.log(e);
            dispatch(asyncActionError());
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

export const getEventsForDashboard = (lastEvent) => async (
    dispatch,
    getState
) => {
    let today = new Date();
    const firestore = firebase.firestore();
    const eventRef = firestore.collection("events");
    try {
        dispatch(asyncActionStart());
        let startAfter =
            lastEvent &&
            (await firestore.collection("events").doc(lastEvent.id).get());

        let query;

        lastEvent
            ? (query = eventRef
                  .where("date", ">=", today)
                  .orderBy("date")
                  .startAfter(startAfter)
                  .limit(2))
            : (query = eventRef
                  .where("date", ">=", today)
                  .orderBy("date")
                  .limit(2));
        let events = [];

        let querySnapshot = await query.get();

        if (querySnapshot.docs.length === 0) {
            dispatch(asyncActionFinish());
            return querySnapshot;
        }
        for (let i = 0; i < querySnapshot.docs.length; i++) {
            let evt = {
                ...querySnapshot.docs[i].data(),
                id: querySnapshot.docs[i].id,
            };
            events.push(evt);
        }

        dispatch({ type: FETCH_EVENT, payload: { events } });
        dispatch(asyncActionFinish());
        return querySnapshot;
    } catch (e) {
        console.log(e);
        dispatch(asyncActionError());
    }
};

export const addEventComment = (eventId, values, parentId) => async (
    dispatch,
    getState,
) => {
    const profile = getState().firebase.profile;
    const user = firebase.auth().currentUser;
    const newComment = {
        parentId: parentId,
        displayName: profile.displayName,
        photoURL: profile.photoURL || "/assets/user.png",
        uid: user.uid,
        text: values.comment,
        date: Date.now(),
    };
    try {
        await firebase.push(`/event_chat/${eventId}`, newComment);
    } catch (e) {
        console.log(e);
        toastr.error("error adding comment", "please try again");
    }
};
