import React from "react";
import { connect } from "react-redux";
import { closeModal } from "./ModalActions";
import { Modal, Header, Button, Icon } from "semantic-ui-react";

const actions = {
    closeModal,
};

const TestModal = ({ closeModal }) => {
    return (
        <Modal
            closeIcon
            open={true}
            size={"tiny"}
            onClose={closeModal}
            style={{ height: "auto", top: "auto", left: "auto" }}
        >
            <Header icon="archive" content="Archive Old Messages" />
            <Modal.Content>
                <p>
                    Your inbox is getting full, would you like us to enable
                    automatic archiving of old messages?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color="red">
                    <Icon name="remove" /> No
                </Button>
                <Button color="green">
                    <Icon name="checkmark" /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default connect(null, actions)(TestModal);
