import React, { useState } from "react";
import useDropdown from "./useDropdown.jsx";

export const Add = () => {
  const [author, setAuthor] = useState("");

  const genres = ["Fantastyka", "Horror", "Kryminał"];
  const audiences = ["Dzieci", "Młodież", "Dorośli"];

  const [genre, GenreDropdown] = useDropdown("", "Gatunek", genres);
  const [audience, AudienceDropdown] = useDropdown("", "Dla", audiences);

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
