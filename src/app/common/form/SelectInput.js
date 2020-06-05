import React from "react";
import { Form, Select } from "semantic-ui-react";

const SelectInput = ({
    input,
    placeholder,
    className,
    options,
    multiple,
    meta: { touched, error },
}) => {
    return (
        <Form.Field error={touched && !!error}>
            <Select
                value={input.value || null}
                onChange={(e, data) => {
                    input.onChange(data.value);
                }}
                placeholder={placeholder}
                options={options}
                multiple={multiple}
                className={className}
            />

            {touched && error && (
                <label className="text-danger ml-2">{error}</label>
            )}
        </Form.Field>
    );
};

export default SelectInput;

// <>
//     <select
//         value={input.value || ""}
//         onChange={(data) => input.onChange(data)}
//         className={className}
//         data-live-search={true}
//     >
//         <option value="">Select a category</option>
//         {options.map((option, e) => (
//             <option key={e} value={option.value}>{option.text}</option>
//         ))}
//     </select>
// </>
