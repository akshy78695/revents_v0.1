import React from "react";

const InputText = ({
    input,
    type,
    placeholder,
    meta: { error, touched },
    className,
}) => {
    return (
        <>
            <input
                {...input}
                type={type}
                placeholder={placeholder}
                className={className}
            />
            {touched && error && <label className="text-danger ml-2">{error}</label>}
        </>
    );
};

export default InputText;
