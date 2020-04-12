import React from "react";
import ReactDOM from "react-dom";
import { Book } from "./Book.jsx";
import { Add } from "./Add.jsx";

const App = () => {
  return (
    <React.StrictMode>
      <div id="created-by-react">
        <h1>React BoookStore</h1>
        <Add />
        <Book
          title="Straż! Straż!"
          author="Terry Prachett"
          publicationDate="1989"
          genre="Fantastyka"
          audience="Młodież"
        />
        <Book
          title="Dwie wieże"
          author="J. R. R. Tolkien"
          publicationDate="1954"
          genre="Fantastyka"
          audience="Młodież"
        />
        <Book
          title="Komnata Tajemnic"
          author="J. K. Rowling"
          publicationDate="1998"
          genre="Fantastyka"
          audience="Młodież"
        />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
