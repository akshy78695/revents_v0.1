import { createReducer } from "../../common/util/ReducerUtil";
import { MODAL_OPEN, MODAL_CLOSE } from "./ModalConstants";

const initialState = null;

export const openModal = (state, payload) => {
    const { modalType, modalProps } = payload;
    return { modalType, modalProps };
};

export const closeModal = (state, payload) => {
    return null;
};

export default createReducer(initialState, {
    [MODAL_OPEN]: openModal,
    [MODAL_CLOSE]: closeModal,
});
