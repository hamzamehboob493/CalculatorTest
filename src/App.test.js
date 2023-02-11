import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator", () => {
  it("displays the initial value of 0", () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId("display");
    expect(display.textContent).toBe("0");
  });

  it("displays the result of a calculation", () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId("display");
    const seven = getByTestId("key-7");
    const eight = getByTestId("key-8");
    const multiply = getByTestId("key-*");
    const equal = getByTestId("key-=");

    fireEvent.click(seven);
    fireEvent.click(eight);
    fireEvent.click(multiply);
    fireEvent.click(seven);
    fireEvent.click(equal);

    expect(display.textContent).toBe("546");
  });

  it("displays an error message for an invalid expression", () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId("display");
    const seven = getByTestId("key-7");
    const multiply = getByTestId("key-*");
    const equal = getByTestId("key-=");

    fireEvent.click(seven);
    fireEvent.click(multiply);
    fireEvent.click(equal);

    expect(display.textContent).toBe("0");
  });

  it("displays an error message for division by zero", () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId("display");
    const seven = getByTestId("key-7");
    const divide = getByTestId("key-/");
    const zero = getByTestId("key-0");
    const equal = getByTestId("key-=");

    fireEvent.click(seven);
    fireEvent.click(divide);
    fireEvent.click(zero);
    fireEvent.click(equal);

    expect(display.textContent).toBe("Error: Division by zero");
  });
});
