import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import InputText from "../../../common/form/InputText";

const RegisterForm = () => {
    return (
        <div>
            <Form size="large">
                <Segment>
                    <Field
                        name="displayName"
                        type="text"
                        component={InputText}
                        placeholder="Known As"
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
                    <Button fluid size="large" className="mt-2" color="violet">
                        Register
                    </Button>
                </Segment>
            </Form>
        </div>
    );
};

export default reduxForm({ form: "registerForm" })(RegisterForm);
