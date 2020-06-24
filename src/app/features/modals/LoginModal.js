import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import LoginForm from "../auth/login/LoginForm";
import { closeModal } from "./ModalActions";

const actions = { closeModal };

class LoginModal extends Component {
    render() {
        return (
            <Modal
                size="mini"
                open={true}
                dimmer={"blurring"}
                onClose={this.props.closeModal}
                style={{ height: "auto", top: "auto", left: "auto" }}
                closeIcon={true}
            >
                <Modal.Header>Login to Re-vents</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <LoginForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, actions)(LoginModal);
