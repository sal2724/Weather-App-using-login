import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Weather from "./Dashboard";

describe("Weather Component", () => {
  test("renders Weather component", () => {
    render(<Weather />);
    // Check if the Weather component renders without crashing
    expect(screen.getByText("Weather App")).toBeInTheDocument();
  });

  test("handles search input change", () => {
    render(<Weather />);
    // Type into the search input
    fireEvent.change(screen.getByPlaceholderText("Enter city/town..."), {
      target: { value: "London" },
    });
    // Check if the input value is updated
    expect(screen.getByPlaceholderText("Enter city/town...").value).toBe(
      "London"
    );
  });

  test("fetches weather data on search button click", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        name: "London",
        main: { temp: 20 },
        weather: [{ main: "Clear", description: "clear sky" }],
      }),
    });

    render(<Weather />);
    // Type into the search input
    fireEvent.change(screen.getByPlaceholderText("Enter city/town..."), {
      target: { value: "London" },
    });

    // Click the search button
    fireEvent.click(screen.getByText("Search"));

    // Wait for the fetch call to complete
    await screen.findByText("London");

    // Check if weather data is displayed
    expect(screen.getByText("London")).toBeInTheDocument();
    expect(screen.getByText("20°C")).toBeInTheDocument();
    expect(screen.getByText("Clear")).toBeInTheDocument();
    expect(screen.getByText("(clear sky)")).toBeInTheDocument();
  });
});
