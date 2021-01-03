import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "../components/SideBar";

describe("SideBar block", () => {
  it("renders a sidebar", () => {
    const { getByText } = render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    );

    const testElement = getByText("SideBar");
    expect(testElement).toBeInTheDocument();
  });
});
