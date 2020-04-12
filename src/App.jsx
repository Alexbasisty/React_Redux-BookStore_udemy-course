import React from "react";
import ReactDOM from "react-dom";
import { Book } from "./Book.jsx";
import { Add } from "./Add.jsx";

const App = () => {
  return (
    <div id="created-by-react">
      <h1>React BoookStore</h1>
      <Add />
      <Book
        title="Straż! Straż!"
        author="Terry Prachett"
        publicationDate="1989"
      />
      <Book
        title="Dwie wieże"
        author="J. R. R. Tolkien"
        publicationDate="1954"
      />
      <Book
        title="Komnata Tajemnic"
        author="J. K. Rowling"
        publicationDate="1998"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
