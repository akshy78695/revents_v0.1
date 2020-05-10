import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./TestActions";
import TestPlaceInput from "./TestPlaceInput";
import { openModal } from "../modals/ModalActions";

const mapState = (state) => ({
    data: state.test.data,
});
const actions = {
    incrementCounter,
    decrementCounter,
    openModal,
};
export class TestComponent extends Component {
    render() {
        const {
            data,
            incrementCounter,
            decrementCounter,
            openModal,
        } = this.props;
        return (
            <div>
                <h1>TestComponent</h1>
                <h1>{data}</h1>
                <button onClick={incrementCounter} className="btn btn-primary">
                    INCREASE
                </button>
                <button onClick={decrementCounter} className="btn btn-danger">
                    DECREASE
                </button>
                <button
                    onClick={() => openModal("TestModal", { data: 23 })}
                    className="btn btn-info"
                >
                    OPen modal
                </button>
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
