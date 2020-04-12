import React, { useState } from "react";

export const Add = () => {
  const [author, setAuthor] = useState("");

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
        <button>Dodaj</button>
      </form>
    </div>
  );
};
