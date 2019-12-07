import React from "react";
import { useTheFetch } from "./use-the-fetch";

export function ListPeople() {
  const { data } = useTheFetch("people");
  return (
    <select>
      {data.results.map(character => (
        <option key={character.name}>{character.name}</option>
      ))}
    </select>
  );
}
