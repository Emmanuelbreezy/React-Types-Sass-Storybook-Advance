import { render, screen } from "@testing-library/react";
import BreadCrumb from "./BreadCrumb";

describe("BreadCrumb", () => {
  test("should render BreadCrumb in Dom", () => {
    render(<BreadCrumb />);
    const BreadCrumbElement = screen.getByTestId("breadcrumb-testid");
    expect(BreadCrumbElement).toBeInTheDocument();
  });
});
