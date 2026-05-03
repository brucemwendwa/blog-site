import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import blogData from "./blog";

// Simple test to verify that the App renders the correct props from blogData
test("renders blog name in header", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(blogData.name);
  expect(headerElement).toBeInTheDocument();
});
