import React from "react";
import { render, screen } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

test("Renders the properties component", () => {
  render(<AddProperty />);
  const linkElement = screen.getByText(/Title/i);
  expect(linkElement).toBeInTheDocument();
});
