import React, { Component } from "react";
import {
    Segment,
    Form,
    Header,
    Divider,
    Button,
    Label,
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import InputDate from "../../../common/form/InputDate";
import PlaceInput from "../../../common/form/PlaceInput";
import TextInput from "../../../common/form/InputText";
import InputRadio from "../../../common/form/InputRadio";

import { subYears } from "date-fns";
class BasicPage extends Component {
    render() {
        const {
            pristine,
            submitting,
            updateProfile,
            handleSubmit,
        } = this.props;
        return (
            <Segment>
                <Header dividing size="large" content="Basics" />
                <Form onSubmit={handleSubmit(updateProfile)}>
                    <Field
                        width={8}
                        name="displayName"
                        type="text"
                        component={TextInput}
                        placeholder="Known As"
                    />
                    <Form.Group inline className="mt-2">
                        <Label className="mr-2">Gender: </Label>
                        <Field
                            name="gender"
                            type="radio"
                            value="male"
                            label="male"
                            component={InputRadio}
                        />
                        <Field
                            name="gender"
                            type="radio"
                            value="female"
                            label="female"
                            component={InputRadio}
                        />
                    </Form.Group>
                    <Field
                        width={8}
                        name="dateOfBirth"
                        component={InputDate}
                        placeholder="Date of Birth"
                        dateFormat="dd LLL yyyy"
                        showYearDropdown={true}
                        showMonthDropdown={true}
                        dropdownMode="select"
                        maxDate={subYears(new Date(), 18)}
                    />
                    <Field
                        name="city"
                        placeholder="Home Town"
                        options={{ types: ["(cities)"] }}
                        label="Female"
                        className="mt-2"
                        component={PlaceInput}
                        width={8}
                    />
                    <Divider />
                    <Button
                        disabled={pristine || submitting}
                        size="large"
                        positive
                        content="Update Profile"
                    />
                </Form>
            </Segment>
        );
    }
}

export default reduxForm({
    form: "userProfile",
    enableReinitialize: true,
    destroyOnUnmount: false,
})(BasicPage);
