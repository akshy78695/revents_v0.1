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
                data-live-search={true}
            >
                <option value="">Select a category</option>
                {options.map((option, e) => (
                    <option key={e} value={option.value}>{option.text}</option>
                ))}
            </select>
            {/* <Form.Field>
                <Select
                    value={input.value || ""}
                    onChange={(e, data) => input.onChange(data)}
                    placeholder={placeholder}
                    options={options}
                    multiple={true}
                    className={className}
                />
            </Form.Field> */}
{/*            
            <Dropdown
                value={input.value || []}
                onChange={(e, data) => input.onChange(data)}
                placeholder={placeholder}
                fluid
                multiple={multiple}
                search
                selection
                options={options}
            /> */}
        </>
    );
};

export default SelectInput;
