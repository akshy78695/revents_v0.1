import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../App.css";

const InputDate = ({
    input,
    placeholder,
    className,
    width,
    meta: { touched, error },
    ...rest
}) => {
    return (
        <div className="customDatePickerWidth">
            <DatePicker
                {...rest}
                className={className}
                style={{ width: "max-width" }}
                placeholderText={placeholder}
                selected={input.value ? new Date(input.value) : null}
                onChange={input.onChange}
                onBlur={input.onBlur}
                onChangeRaw={(e) => e.preventDefault()}
            />
            {touched && error && (
                <label className="text-danger ml-2">{error}</label>
            )}
        </div>
    );
};

export default InputDate;
