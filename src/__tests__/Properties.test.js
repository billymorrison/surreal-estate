import React from "react";
import { render, screen } from "@testing-library/react";
import Properties from "../components/Properties";

test("Renders the properties component", () => {
  render(<Properties />);
  const linkElement = screen.getByText(/Properties page/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveClass("properties");
});
