import { SubmissionError, reset } from "redux-form";
import { closeModal } from "../modals/ModalActions";
import { toastr } from "react-redux-toastr";

export const login = (creds) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        try {
            await firebase
                .auth()
                .signInWithEmailAndPassword(creds.email, creds.password);
            dispatch(closeModal());
        } catch (e) {
            console.log(e);
            throw new SubmissionError({
                _error: e,
            });
        }
    };
};

export const registerUser = (user) => async (
    dispatch,
    getState,
    { getFirebase, getFirestore }
) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
        let createdUser = await firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password);
        console.log(createdUser);
        await createdUser.user.updateProfile({
            displayName: user.displayName,
        });
        let newUser = {
            displayName: user.displayName,
            createdAt: firestore.FieldValue.serverTimestamp(),
        };
        await firestore.set(`users/${createdUser.user.uid}`, { ...newUser });
        dispatch(closeModal());
    } catch (e) {
        console.log(e);
        throw new SubmissionError({
            _error: e,
        });
    }
};

export const socialLogin = (selectedProvider) => async (
    dispatch,
    getState,
    { getFirebase, getFirestore }
) => {
    let firebase = getFirebase();
    let firestore = getFirestore();
    try {
        dispatch(closeModal());
        let user = await firebase.login({
            provider: selectedProvider,
            type: "popup",
        });
        console.log(user);
        if (user.additionalUserInfo.isNewUser) {
            await firestore.set(`users/${user.user.uid}`, {
                displayName: user.profile.displayName,
                photoURL: user.profile.avatarUrl,
                createdAt: firestore.FieldValue.serverTimestamp(),
            });
        }
        toastr.success("Login Successfull");
    } catch (e) {
        console.log(e);
        if (e.code === "auth/network-request-failed") {
            toastr.error("Login Failed!", "Please try again");
        }
    }
};

export const updatePassword = (creds) => async (
    dispatch,
    getState,
    { getFirebase }
) => {
    const firebase = getFirebase();
    let user = firebase.auth().currentUser;
    try {
        await user.updatePassword(creds.newPassword1);
        await dispatch(reset("account"));
        toastr.success("success", "your password has been updated")
    } catch (e) {
        console.log(e);
        throw new SubmissionError({
            _error: e,
        });
    }
};
