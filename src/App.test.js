import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { test, expect } from "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/ranslat/i);
  expect(linkElement).toBeInTheDocument();
});
