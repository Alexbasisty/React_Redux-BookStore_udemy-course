import React, { useState } from "react";

const useDropdown = (defaultState, label, options) => {
    const [state, setState] = useState(defaultState);

    const id = `use-dropdown-${label}`;

    const Dropdown = () => {
        return (
            <label htmlFor={id}>
                {label}
                <select
                    id={id}
                    value={state}
                    onBlur={(e) => setState(e.target.value)}
                    onChange={(e) => setState(e.target.value)}
                >
                    <option>Dowolny</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        );
    };
    return [state, Dropdown, setState];
};

export default useDropdown;
