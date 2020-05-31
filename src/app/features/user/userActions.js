import { toastr } from "react-redux-toastr";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import cuid from "cuid";
import {
    asyncActionStart,
    asyncActionFinish,
    asyncActionError,
} from "../async/asyncActions";

export const updateProfile = (user) => async (
    dispatch,
    getState,
    { getFirebase }
) => {
    const firebase = getFirebase();
    const { isLoaded, isEmpty, ...updatedUser } = user;
    console.log(user);
    try {
        await firebase.updateProfile(updatedUser);
        toastr.success("success", "profile has been updated");
    } catch (e) {
        console.log(e);
    }
};
export const uploadProfileImage = (file, fileName) => async (
    dispatch,
    getState,
    { getFirestore, getFirebase }
) => {
    let imageName = cuid();

    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    console.log(user);
    console.log(user.photoURL);
    const path = `${user.uid}/user_images`;
    const options = { name: `${imageName}` };
    try {
        dispatch(asyncActionStart());
        console.log("in the UploadProfileImage");
        console.log(file);
        console.log(fileName);
        //upload file to firebase storage
        const uploadedFile = await firebase.uploadFile(
            path,
            file,
            null,
            options
        );
        console.log("uploaded files", uploadedFile);
        const downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
        console.log("donwload URL", downloadURL);
        //get user document
        const userDoc = await firestore.get(`users/${user.uid}`);
        console.log("userdoc", userDoc);
        //check if user has photo if not update profile
        if (!userDoc.data().photoURL) {
            await firebase.updateProfile({
                photoURL: downloadURL,
            });
            await user.updateProfile({
                photoURL: downloadURL,
            });
        }
        //add image to firestore
        await firestore.add(
            {
                collection: "users",
                doc: user.uid,
                subcollections: [{ collection: "photos" }],
            },
            {
                name: `${imageName}`,
                url: downloadURL,
            }
        );
        dispatch(asyncActionFinish());
        return "success";
    } catch (e) {
        console.log(e);
        dispatch(asyncActionError());
        toastr.error("oops", "photo not uploaded, Please try again");
        return "error";
    }
    // };
};

export const deletePhoto = (photo) => async (
    dispatch,
    getState,
    { getFirebase, getFirestore }
) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;

    try {
        await firebase.deleteFile(`${user.uid}/user_images/${photo.name}`);
        await firestore.delete({
            collection: "users",
            doc: user.uid,
            subcollections: [{ collection: "photos", doc: photo.id }],
        });
    } catch (e) {
        console.log(e);
        throw new Error("error deleting photo");
    }
};

export const setMainPhoto = (photo) => async (
    dispatch,
    getState,
    { getFirebase }
) => {
    const firebase = getFirebase();
    try {
        return await firebase.updateProfile({
            photoURL: photo.url,
        });
    } catch (e) {
        console.log(e);
        throw new Error("Error setting main photo");
    }
};
