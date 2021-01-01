import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("Property Card", () => {
  test("Renders the properties component with relevant props", () => {
    const mockProperty = {
      title: "New House",
      type: "Semi Detached",
      bathrooms: 3,
      bedrooms: 4,
      price: 100000,
      city: "Manchester",
      email: "billy.morrison1234@hotmail.co.uk",
    };
    render(<PropertyCard property={mockProperty} />);
    const title = screen.getByText(/New House/i);
    const type = screen.getByText(/Semi Detached/i);
    const bathrooms = screen.getByText(/3/i);
    const bedrooms = screen.getByText(/4/i);
    const price = screen.getByText(/100000/i);
    expect(title).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(bathrooms).toBeInTheDocument();
    expect(bedrooms).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
