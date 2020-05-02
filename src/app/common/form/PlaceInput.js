import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";

const PlaceInput = ({
    placeholder,
    meta: { touched, error },
    input: { value, onChange, onBlur },
    width,
    options,
    onSelect,
    className,
}) => {
    return (
        <PlacesAutocomplete
            value={value}
            onChange={onChange}
            searchOPtions={options}
            onSelect={onSelect}
        >
            {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
            }) => (
                <div>
                    <input
                        className={className}
                        placeholder={placeholder}
                        {...getInputProps({ placeholder, onBlur })}
                    />
                    {touched && error && (
                        <label className="text-danger ml-2">{error}</label>
                    )}
                    {suggestions.length > 0 && (
                        <ul
                            className="list-group"
                            style={{
                                width: "90%",
                                zIndex: "1000",
                                position: "absolute",
                            }}
                        >
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => (
                                <li
                                    className="list-group-item"
                                    {...getSuggestionItemProps(suggestion)}
                                >
                                    {`${suggestion.formattedSuggestion.mainText} ${suggestion.formattedSuggestion.secondaryText}`}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </PlacesAutocomplete>
    );
};

export default PlaceInput;
