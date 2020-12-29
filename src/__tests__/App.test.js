import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

xtest("Renders the initial app with H2", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});
