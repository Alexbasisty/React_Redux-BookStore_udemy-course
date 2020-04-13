import React from "react";

export class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: `component-input-${this.props.label}`,
        };
    }

    render() {
        const { label, state, setState, type = "text" } = this.props;
        const { id } = this.state;
        return (
            <label htmlFor={id}>
                {label}
                <input
                    id={id}
                    type={type}
                    value={state}
                    placeholder={label}
                    onChange={(event) => {
                        setState(event.target.value);
                    }}
                />
            </label>
        );
    }
}
