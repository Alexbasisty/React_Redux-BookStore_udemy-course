import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown.jsx";

export const Add = () => {
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState([]);

  const genres = ["Fantastyka", "Horror", "Kryminał"];
  const audiences = ["Dzieci", "Młodież", "Dorośli"];

  const [genre, GenreDropdown] = useDropdown("", "Gatunek", genres);
  const [audience, AudienceDropdown] = useDropdown("", "Dla", audiences);

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
    <div>
      <form>
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
        <br />
        <GenreDropdown />
        <br />
        <AudienceDropdown />
        <button>Dodaj</button>
      </form>
    </div>
  );
};
