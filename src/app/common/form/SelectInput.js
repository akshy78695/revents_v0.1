import React from "react";

const SelectInput = ({
    input,
    placeholder,
    className,
    options,
    multiple,
    meta: { touched, error },
}) => {
    return (
        <>
            <select
                value={input.value || ""}
                onChange={(data) => input.onChange(data)}
                className={className}
            >
                <option value="">Select a category</option>
                {options.map((option, e) => (
                    <option key={e}>{option.text}</option>
                ))}
            </select>
        </>
    );
};

export default SelectInput;
