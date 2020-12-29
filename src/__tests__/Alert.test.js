import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert block", () => {
  it("renders an error block when passed an error", () => {
    const { getByText } = render(<Alert message="Error!" />);

    const testElement = getByText("Error!");
    expect(testElement).toHaveClass("alert");
    expect(testElement).toHaveClass("error");
  });

  it("renders a success block when passed an success", () => {
    const { getByText } = render(<Alert message="Success!" success />);

    const testElement = getByText("Success!");
    expect(testElement).toHaveClass("alert");
    expect(testElement).toHaveClass("success");
  });
});
