import React, { Component } from "react";

export class InputComponennts extends Component {
    render() {
        return (
            <label htmlFor="author">
                Autor
                <input
                    id="author"
                    value={author}
                    placeholder="Autor"
                    onChange={(event) => {
                        setAuthor(event.target.value);
                    }}
                />
            </label>
        );
    }
}
