import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import { Add } from "./Add.jsx";
import { Inventory } from "./Inventory.jsx";

const App = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://clockworkjava.pl/books.php")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setBooks(data);
            });
    }, []);

    return (
        <React.StrictMode>
            <div id="created-by-react">
                <Link to="/">
                    <h1>React BoookStore</h1>
                </Link>
                <Router>
                    <Add books={books} setBooks={setBooks} path="/admin" />
                    <Inventory books={books} path="/" />
                </Router>
            </div>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
