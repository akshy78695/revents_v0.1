import { toastr } from "react-redux-toastr";

export const updateProfile = (user) => async (
    dispatch,
    getState,
    { getFirebase }
) => {
    const firebase = getFirebase();
    const { isLoaded, isEmpty, ...updatedUser } = user;
    try {
        await firebase.updateProfile(updatedUser);
        toastr.success("success", "profile has been updated");
    } catch (e) {
        console.log(e);
    }
};
