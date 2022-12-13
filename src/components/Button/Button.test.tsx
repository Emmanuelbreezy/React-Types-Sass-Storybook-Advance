import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("should render Button in Dom", () => {
    render(<Button />);
    const ButtonElement = screen.getByTestId("button-id");
    expect(ButtonElement).toBeInTheDocument();
  });
});
