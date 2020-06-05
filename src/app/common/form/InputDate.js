import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../App.css";

const InputDate = ({
    input: { value, onChange, onBlur },
    placeholder,
    className,
    width,
    meta: { touched, error },
    ...rest
}) => {
    return (
        <div className="customDatePickerWidth">
            {/* <div> */}
            <DatePicker
                {...rest}
                className={className}
                style={{ width: "max-width" }}
                placeholderText={placeholder}
                // selected={
                //     !input.value.seconds && typeof input.value !== "string"
                //         ? new Date(input.value)
                //         : null
                // }
                selected={
                    value
                        ? Object.prototype.toString.call(value) !==
                          "[object Date]"
                            ? value.toDate()
                            : value
                        : null
                }
                onChange={onChange}
                onBlur={(e, val) => onBlur(val)}
                onChangeRaw={(e) => e.preventDefault()}
            />
            {touched && error && (
                <label className="text-danger ml-2">{error}</label>
            )}
        </div>
    );
};

export default InputDate;
