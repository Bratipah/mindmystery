"use client";

import { character } from "@/utils/data";
import { Dispatch, SetStateAction } from "react";

interface CharacterFilterProps {
  selectedCharacter: string;
  setCharacter: Dispatch<SetStateAction<string>>;
}

const CharacterFilter = ({ selectedCharacter, setCharacter }: CharacterFilterProps) => {
  return (
    <div className="mt-40">
      <h1 className="text-white text-5xl font-bold mb-8">Available Characters</h1>
      <div className="gap-x-16 flex flex-wrap gap-y-4">
        {character.map((characterArr: string) => (
          <button
            key={characterArr}
            onClick={() => setCharacter(characterArr)}
            className={`rounded-lg text-xl border px-8 py-4 ${
              selectedCharacter === characterArr
                ? "text-white bg-primaryColor border-gray-600 hover:border-white hover:text-white"
                : "text-gray-400 border-gray-600 hover:border-primaryColor hover:text-primaryColor"
            } transition duration-500`}
          >
            {characterArr}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterFilter;
