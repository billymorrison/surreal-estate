import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

test("Renders the initial app", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});
