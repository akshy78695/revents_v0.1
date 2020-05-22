import React from "react";
import { connect } from "react-redux";
import { combineValidators, isRequired } from "revalidate";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import InputText from "../../../common/form/InputText";
import SocialLogin from "../socialLogin/SocialLogin"
import { registerUser } from "../authActions";

const actions = {
    registerUser,
};

const validate = combineValidators({
    displayName: isRequired("displayName"),
    email: isRequired("email"),
    password: isRequired("password"),
});

const RegisterForm = ({
    handleSubmit,
    registerUser,
    error,
    invalid,
    submitting,
}) => {
    return (
        <div>
            <Form size="large" onSubmit={handleSubmit(registerUser)}>
                <Segment>
                    <Field
                        name="displayName"
                        type="text"
                        component={InputText}
                        placeholder="Display Name"
                    />
                    <Field
                        name="email"
                        type="text"
                        component={InputText}
                        placeholder="Email"
                        className="mt-2"
                    />
                    <Field
                        name="password"
                        type="password"
                        component={InputText}
                        placeholder="Password"
                        className="mt-2"
                    />
                    {error && (
                        <Label basic color="red">
                            {error.message}
                        </Label>
                    )}
                    <Button
                        disabled={invalid || submitting}
                        fluid
                        size="large"
                        className="mt-2"
                        color="violet"
                    >
                        Register
                    </Button>
                    <Divider horizontal>Or</Divider>
                    <SocialLogin/>
                </Segment>
            </Form>
        </div>
    );
};

export default connect(
    null,
    actions
)(reduxForm({ form: "registerForm", validate })(RegisterForm));
