import { render, screen } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography", () => {
  test("should render Typography in Dom", () => {
    render(<Typography />);
    const TypographyElement = screen.getByTestId("typography-id");
    expect(TypographyElement).toBeInTheDocument();
  });
});
