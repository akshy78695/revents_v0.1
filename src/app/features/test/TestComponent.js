import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync } from "./TestActions";
import TestPlaceInput from "./TestPlaceInput";
import { openModal } from "../modals/ModalActions";
import { Button, Header } from "semantic-ui-react";
import { toastr } from "react-redux-toastr";
import firebase from "../../config/firebase";

const mapState = (state) => ({
    data: state.test.data,
    loading: state.async.loading,
    buttonName: state.async.elementName,
});
const actions = {
    incrementAsync,
    decrementAsync,
    openModal,
};
export class TestComponent extends Component {
    handleTestUpdateProfile = async () => {
        const firestore = firebase.firestore();
        // doc = diana's userUid
        let userDocRef = await firestore
            .collection("users")
            .doc("nSkb9so2SEPew47GXuXw9T2m95D2");
        try {
            await userDocRef.update({ displayName: "testing" });
            toastr.success("Success");
        } catch (error) {
            console.log(error);
            toastr.error("Computer says no");
        }
    };

    handleCreateTestEvent = async () => {
        const firestore = firebase.firestore();
        let eventDocRef = await firestore.collection("events").doc("DELETEME");
        try {
            await eventDocRef.set({
                title: "DELETEME",
            });
            toastr.success("Success");
        } catch (error) {
            console.log(error);
            toastr.error("Computer says no");
        }
    };

    handleTestJoinEvent = async () => {
        const firestore = firebase.firestore();
        let eventDocRef = await firestore.collection("events").doc("DELETEME");
        const attendee = {
            photoURL: "/assets/user.png",
            displayName: "Testing",
        };
        try {
            await eventDocRef.update({
                [`attendees.nSkb9so2SEPew47GXuXw9T2m95D2`]: attendee,
            });
            toastr.success("Success");
        } catch (error) {
            console.log(error);
            toastr.error("Computer says no");
        }
    };

    handleTestCancelGoingToEvent = async () => {
        const firestore = firebase.firestore();
        let eventDocRef = await firestore.collection("events").doc("DELETEME");
        try {
            await eventDocRef.update({
                [`attendees.nSkb9so2SEPew47GXuXw9T2m95D2`]: firebase.firestore.FieldValue.delete(),
            });
            toastr.success("Success");
        } catch (error) {
            console.log(error);
            toastr.error("Computer says no");
        }
    };

    handleTestChangeAttendeePhotoInEvent = async () => {
        const firestore = firebase.firestore();
        let eventDocRef = await firestore.collection("events").doc("DELETEME");
        try {
            await eventDocRef.update({
                [`attendees.nSkb9so2SEPew47GXuXw9T2m95D2.photoURL`]: "testing123.jpg",
            });
            toastr.success("Success");
        } catch (error) {
            console.log(error);
            toastr.error("Computer says no");
        }
    };
    render() {
        const {
            data,
            incrementAsync,
            decrementAsync,
            openModal,
            loading,
            buttonName,
        } = this.props;
        return (
            <div>
                <h1>TestComponent</h1>
                <h1>{data}</h1>
                {/* <button onClick={incrementAsync} className="btn btn-primary">
                    INCREASE
                </button>
                <button onClick={decrementAsync} className="btn btn-danger">
                    DECREASE
                </button> */}
                <Button
                    primary
                    name="increment"
                    onClick={(e) => incrementAsync(e.target.name)}
                    loading={buttonName === "increment" && loading}
                >
                    INCREASE
                </Button>
                <Button
                    primary
                    name="decrement"
                    onClick={(e) => decrementAsync(e.target.name)}
                    loading={buttonName === "decrement" && loading}
                >
                    DECREASE
                </Button>

                <button
                    onClick={() => openModal("TestModal", { data: 23 })}
                    className="btn btn-info"
                >
                    OPen modal
                </button>
                <button className="btn btn-primary" type="button" disabled>
                    <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                </button>
                <br />
                <br />
                <br />
                <br />
                <Header as="h2" content="Permissions tests" />
                <Button
                    onClick={this.handleCreateTestEvent}
                    color="blue"
                    fluid
                    content="Test create event - should fail if anon"
                />
                <Button
                    onClick={this.handleTestUpdateProfile}
                    color="orange"
                    fluid
                    content="Test update dianas profile - should fail if anon/not diana - should succeed if diana"
                />
                <Button
                    onClick={this.handleTestJoinEvent}
                    color="olive"
                    fluid
                    content="Test joining an event - should fail if anon/not diana - should succeed if diana"
                />
                <Button
                    onClick={this.handleTestCancelGoingToEvent}
                    color="purple"
                    fluid
                    content="Test cancelling attendance to an event - should fail if anon/not diana - should succeed if diana"
                />
                <Button
                    onClick={this.handleTestChangeAttendeePhotoInEvent}
                    color="violet"
                    fluid
                    content="Test changing photo for event attendee - should fail if anon/not diana - should succeed if diana"
                />
                <br />
                <br />
                <br />
                <TestPlaceInput />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default connect(mapState, actions)(TestComponent);
