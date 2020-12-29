import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("Renders the nav bar with links", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/View Properties/i);
  expect(linkElement).toBeInTheDocument();
});
