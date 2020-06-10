import React from "react";

const InputTextarea = ({
    input,
    rows,
    type,
    placeholder,
    meta: { error, touched },
    className,
}) => {
    return (
        <>
            <textarea
                {...input} 
                placeholder={placeholder}
                type={type}
                className={className}
                rows={rows}
            />
            {touched && error && (
                <div>
                    <label className="text-danger ml-2">{error}</label>
                </div>
            )}
        </>
    );
};

export default InputTextarea;
