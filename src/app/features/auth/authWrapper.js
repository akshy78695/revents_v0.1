import { connectedReduxRedirect } from "redux-auth-wrapper/history4/redirect";
import { openModal } from "../modals/ModalActions";

let authenticated = "";
export const UserIsAuthenticated = connectedReduxRedirect({
    wrapperDisplayName: "UserIsAuthenticated",
    allowRedirectBack: true,
    redirectPath: "/events",
    authenticatedSelector: ({ firebase: { auth } }) => {
        if (auth.isLoaded) {
            if (!auth.isEmpty) {
                authenticated = "auth";
                return true;
            } else {
                authenticated = "unAuth";
                return false;
            }
        }
    },
    redirectAction: (newLoc) => (dispatch) => {
        authenticated === "unAuth" && dispatch(openModal("UnauthModal"));
    },
});
