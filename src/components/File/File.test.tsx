import { render, screen } from "@testing-library/react";
import File from "./File";

describe("File", () => {
  test("should render File in Dom", () => {
    render(<File />);
    const FileElement = screen.getByTestId("file-id");
    expect(FileElement).toBeInTheDocument();
  });
});
