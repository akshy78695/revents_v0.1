import React from "react";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import InputText from "../../../common/form/InputText";
import { connect } from "react-redux";
import { login, socialLogin } from "../authActions";
import SocialLogin from "../socialLogin/SocialLogin";

const actions = {
    login,
    socialLogin,
};

const LoginForm = ({ login, handleSubmit, error, socialLogin, submitting }) => {
    return (
        <Form size="large" onSubmit={handleSubmit(login)}>
            <Segment>
                <Field
                    name="email"
                    component={InputText}
                    type="email"
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
                {error && error.code === "auth/invalid-email" && (
                    <Label basic color="red" className="mt-2">
                        enter valid email
                    </Label>
                )}
                {error && error.code !== "auth/invalid-email" && (
                    <Label basic color="red" className="mt-2">
                        Login failed
                    </Label>
                )}
                <div
                    data-toggle={"collapse"}
                    data-target={".navbar-collapse.show"}
                >
                    <Button
                        loading={submitting}
                        fluid
                        size="large"
                        color="purple"
                        className="mt-2"
                    >
                        Login
                    </Button>
                </div>
                <Divider horizontal>Or</Divider>
                <SocialLogin socialLogin={socialLogin} />
            </Segment>
        </Form>
    );
};

export default connect(
    null,
    actions
)(reduxForm({ form: "loginForm" })(LoginForm));
