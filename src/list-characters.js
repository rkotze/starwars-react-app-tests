import React from "react";
import { useTheFetch } from "./use-the-fetch";

export function ListCharacters({ onChange }) {
  const { loading, data } = useTheFetch("people");

  function selectedCharacter(e) {
    onChange(data.results[e.target.value]);
  }
  return (
    <select role="character-select" onChange={selectedCharacter}>
      {!loading &&
        data.results.map((character, i) => (
          <option value={i} key={character.name}>
            {character.name}
          </option>
        ))}
      {loading && <option>Loading ...</option>}
    </select>
  );
}
