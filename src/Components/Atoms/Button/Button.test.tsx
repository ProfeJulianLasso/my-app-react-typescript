import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import ButtonAtom, { ButtonAtomProps } from ".";

describe("ButtonAtom", () => {
  let props: ButtonAtomProps;
  let onClickMock: jest.Mock;

  beforeEach(() => {
    onClickMock = jest.fn();
    props = {
      text: "Test",
      onClick: onClickMock,
    };
  });

  it("should render correctly", () => {
    // Arrange
    const expectedText = "Test";
    const text = "Test";
    const { container } = render(<ButtonAtom {...props} />);
    console.log(prettyDOM(container));

    // Act
    const result = screen.getByText(text);
    console.log(prettyDOM(result));
    // const result = screen.queryByText(text);
    // const result = await screen.findByText(text);

    // Assert
    expect(result).toHaveTextContent(expectedText);
  });

  it("should render correctly and select by role", () => {
    // Arrange
    const expectedText = "Test";
    const role = "button";
    render(<ButtonAtom {...props} />);

    // Act
    const result = screen.getByRole(role);

    // Assert
    expect(result).toHaveTextContent(expectedText);
  });

  it("event onClick should be called", () => {
    // Arrange
    render(<ButtonAtom {...props} />);

    // Act
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Assert
    expect(onClickMock).toBeCalled();
  });
});
