import React, { useState } from "react";
import { ListCharacters } from "./list-characters";

export function CharacterDetails() {
  const [character, setCharacter] = useState(null);

  const charProps = character && Object.entries(character);
  return (
    <div>
      Characters: <ListCharacters onChange={setCharacter} />
      {charProps &&
        charProps.map(([key, value]) => {
          if (typeof value === "string")
            return (
              <p>
                {key}: {value}
              </p>
            );
          return null;
        })}
    </div>
  );
}
