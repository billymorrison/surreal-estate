import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Properties from "../components/Properties";

test("Renders the properties component", () => {
  act(() => render(<Properties />));
  const linkElement = screen.getByText(/Properties page/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveClass("properties");
});
