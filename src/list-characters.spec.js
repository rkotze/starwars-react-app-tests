import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { ListCharacters } from "./list-characters";
import { useTheFetch } from "./use-the-fetch";
jest.mock("./use-the-fetch");

describe("list characters", () => {
  it("loading state", () => {
    useTheFetch.mockReturnValue({
      loading: true,
      data: null
    });

    const { container } = render(<ListCharacters />);

    expect(useTheFetch).toHaveBeenCalled();
    expect(container).toHaveTextContent("Loading");
  });

  it("lists three", () => {
    useTheFetch.mockReturnValue({
      loading: false,
      data: {
        results: [
          {
            name: "Luke Skywalker"
          },
          {
            name: "C-3PO"
          },
          {
            name: "Darth Vader"
          }
        ]
      }
    });
    const { getAllByText, container } = render(<ListCharacters />);
    const selectList = getAllByText((_content, element) => {
      return element.tagName.toLowerCase() === "option";
    });

    expect(useTheFetch).toBeCalledWith("people");
    expect(container).toHaveTextContent("Luke Skywalker");
    expect(selectList).toHaveLength(3);
  });

  it("select a different character to get details", () => {
    useTheFetch.mockReturnValue({
      loading: false,
      data: {
        results: [
          {
            name: "Luke Skywalker",
            height: "177"
          },
          {
            name: "C-3PO",
            height: "169"
          },
          {
            name: "Darth Vader",
            height: "201"
          }
        ]
      }
    });
    const handleNewCharacter = jest.fn();

    const { getByRole } = render(
      <ListCharacters onChange={handleNewCharacter} />
    );

    fireEvent.change(getByRole("character-select"), {
      target: {
        value: 2
      }
    });

    expect(handleNewCharacter).toBeCalledWith({
      name: "Darth Vader",
      height: "201"
    });
  });
});
