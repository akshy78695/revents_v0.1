import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import InputText from "../../../common/form/InputText";
import { connect } from "react-redux";
import { login } from "../authActions";

const actions = {
    login,
};

const LoginForm = ({ login, handleSubmit }) => {
    return (
        <Form error size="large" onSubmit={handleSubmit(login)}>
            <Segment>
                <Field
                    name="email"
                    component={InputText}
                    type="text"
                    placeholder="Email Address"
                    className="mt-2"
                />
                <Field
                    name="password"
                    component={InputText}
                    type="password"
                    placeholder="password"
                    className="mt-2"
                />
                <Button fluid size="large" color="purple" className="mt-2">
                    Login
                </Button>
            </Segment>
        </Form>
    );
};

export default connect(
    null,
    actions
)(reduxForm({ form: "loginForm" })(LoginForm));
