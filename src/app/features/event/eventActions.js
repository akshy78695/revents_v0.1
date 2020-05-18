import {
    CREATE_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    FETCH_EVENT,
} from "./eventConstants";
import { asyncActionStart, asyncActionError } from "../async/asyncActions";
import { fetchSampleData } from "../../data/mockApi";
import { toastr } from "react-redux-toastr";

export const createEvent = (event) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CREATE_EVENT,
                payload: { event },
            });
            toastr.success("Success!", "Event Has Created");
        } catch (e) {
            toastr.error(" something went wrong!", "Event Not created!");
        }
    };
};

export const updateEvent = (event) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: UPDATE_EVENT,
                payload: { event },
            });
            toastr.success("Success!", "Event Has Updated");
        } catch (e) {
            toastr.error("something went wrong!", "Event Not Updated!");
        }
    };
};

export const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        payload: { eventId },
    };
};

export const loadEvent = () => {
    return async (dispatch) => {
        try {
            dispatch(asyncActionStart());
            const events = await fetchSampleData();
            dispatch({ type: FETCH_EVENT, payload: { events } });
            dispatch(asyncActionError());
        } catch (e) {
            console.log(e);
            dispatch(asyncActionError());
        }
    };
};
