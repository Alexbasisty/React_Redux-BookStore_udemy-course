import React from "react";
import { Link } from "@reach/router";

import { Book } from "./Book.jsx";

export const Inventory = ({ books }) => {
    const bookComponent = books.map((book) => (
        <Book
            key={book.title}
            title={book.title}
            author={book.author}
            publicationDate={book.publicationDate}
            genre={book.genre}
            audience={book.audience}
        />
    ));
    return (
        <React.Fragment>
            {books.length === 0 ? <h3>Brak książek</h3> : bookComponent}
            <Link to="/admin">Zarządzaj inwentarzem</Link>
        </React.Fragment>
    );
};
