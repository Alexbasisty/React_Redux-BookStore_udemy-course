// import React from "react";
// import ReactDOM from "react-dom";

const App = () => {
  return React.createElement(
    "div",
    {
      id: "created-by-react",
    },
    [
      React.createElement("h1", {}, "React BoookStore"),
      React.createElement(
        Book,
        {
          title: "Straż! Straż!",
          author: "Terry Prachett",
          publicationDate: "1989",
        },
        { title: "" }
      ),
      React.createElement(Book, {
        title: "Dwie wieże",
        author: "J. R. R. Tolkien",
        publicationDate: "1954",
      }),
      React.createElement(Book, {
        title: "Komnata Tajemnic",
        author: "J. K. Rowling",
        publicationDate: "1998",
      }),
    ]
  );
};

const Book = ({ title, author, publicationDate }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, title),
    React.createElement("h3", {}, author),
    React.createElement("h3", {}, publicationDate),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
