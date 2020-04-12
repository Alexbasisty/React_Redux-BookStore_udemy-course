import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
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
        <h1>React BoookStore</h1>
        <Add />
        <Inventory books={books} />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
