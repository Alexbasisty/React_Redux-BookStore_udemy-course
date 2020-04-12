import React, { useState } from "react";

export const Add = () => {
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [audience, setAudience] = useState("");

  const genres = ["Fantastyka", "Horror", "Kryminał"];
  const audiences = ["Dzieci", "Młodież", "Dorośli"];

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
        <label htmlFor="genre">
          Gatunek
          <select
            id="genre"
            value={genre}
            onBlur={(e) => setGenre(e.target.value)}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Dowolna</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label htmlFor="audience">
          Dla
          <select
            id="audience"
            value={audience}
            onBlur={(e) => setAudience(e.target.value)}
            onChange={(e) => setAudience(e.target.value)}
          >
            <option>Dowolna</option>
            {audiences.map((audience, index) => (
              <option key={index} value={audience}>
                {audience}
              </option>
            ))}
          </select>
        </label>
        <button>Dodaj</button>
      </form>
    </div>
  );
};
