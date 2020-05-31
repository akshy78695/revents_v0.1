import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync } from "./TestActions";
import TestPlaceInput from "./TestPlaceInput";
import { openModal } from "../modals/ModalActions";
import { Button } from "semantic-ui-react";

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
                <TestPlaceInput />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default connect(mapState, actions)(TestComponent);
