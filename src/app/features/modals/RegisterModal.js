import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import { closeModal } from "./ModalActions";
import RegisterForm from "../auth/register/RegisterForm";

const actions = { closeModal };

class RegisterModal extends Component {
    render() {
        return (
            <Modal
                closeIcon={true}
                dimmer={"blurring"}
                size="mini"
                open={true}
                onClose={this.props.closeModal}
                style={{ height: "auto", top: "auto", left: "auto" }}
            >
                <Modal.Header>Sign Up to Re-vents!</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <RegisterForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, actions)(RegisterModal);
