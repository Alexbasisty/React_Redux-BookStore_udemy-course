import React from "react";

const Book = ({ title, author, publicationDate }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, title),
    React.createElement("h3", {}, author),
    React.createElement("h3", {}, publicationDate),
  ]);
};

export default Book;
