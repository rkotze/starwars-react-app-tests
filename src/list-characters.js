import React from "react";
import { useTheFetch } from "./use-the-fetch";

export function ListCharacters() {
  const { loading, data } = useTheFetch("people");

  return (
    <select>
      {!loading &&
        data.results.map(character => (
          <option key={character.name}>{character.name}</option>
        ))}
      {loading && <option>Loading ...</option>}
    </select>
  );
}
