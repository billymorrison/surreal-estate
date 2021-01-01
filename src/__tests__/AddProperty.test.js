import React from "react";
import { render, screen } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

test("Renders the add properties component", () => {
  render(<AddProperty />);
  const linkElement = screen.getAllByText(/Add a Property/i);
  expect(linkElement[0]).toBeInTheDocument();
});
