const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const newActivity = (type, event, id) => {
    return {
        type: type,
        eventDate: event.date,
        hostedBy: event.hostedBy,
        title: event.title,
        photoURL: event.hostPhotoURL,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        hostUid: event.hostUid,
        eventId: id,
    };
};

exports.createActivity = functions.firestore
    .document("events/{eventId}")
    .onCreate(async (event) => {
        let newEvent = event.data();

        console.log("new Event", newEvent);

        let activity = newActivity("newEvent", newEvent, event.id);

        console.log("activity", activity);

        try {
            const docRef = await admin
                .firestore()
                .collection("activity")
                .add(activity);
            return console.log("activity created with ID: ", docRef.id);
        } catch (e) {
            return console.log("error creating activity: ", e);
        }
    });

exports.cancelActivity = functions.firestore
    .document("events/{eventId}")
    .onUpdate(async (event, context) => {
        const updatedEvent = event.after.data();
        const previousEvent = event.before.data();

        console.log("event:  ", { event });
        console.log("context:  ", { context });
        console.log("updatedEvent:  ", { updatedEvent });
        console.log("previousEvent:  ", { previousEvent });

        if (
            !updatedEvent.cancelled ||
            updatedEvent.cancelled === previousEvent.cancelled
        )
            return false;

        const activity = newActivity(
            "cancelledEvent",
            updatedEvent,
            context.params.eventId
        );
        console.log(context.params.eventId);
        console.log("cancelled activity: ", activity);

        try {
            const docRef = await admin
                .firestore()
                .collection("activity")
                .add(activity);
            return console.log("activity created with ID: ", docRef.id);
        } catch (e) {
            return console.log("error creating activity: ", e);
        }
    });
