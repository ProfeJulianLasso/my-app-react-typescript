import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import ButtonAtom, { ButtonAtomProps } from ".";

describe("ButtonAtom", () => {
  let buttonProps: ButtonAtomProps;
  let onClickMock: jest.Mock;

  beforeEach(() => {
    onClickMock = jest.fn();
    buttonProps = {
      text: "Test",
      onClick: onClickMock,
    };
  });

  it("should render correctly", async () => {
    // Arrange
    render(<ButtonAtom {...buttonProps} />);

    // Act
    const data = await screen.findByText("Test");
    console.log(prettyDOM(data));

    // Assert
    expect(data).toHaveTextContent("Test");
  });

  it("should click on the button", async () => {
    // Arrange
    render(<ButtonAtom {...buttonProps} />);

    // Act
    const button = screen.getAllByRole("button")[0];
    fireEvent.click(button);

    // Assert
    expect(onClickMock).toBeCalledTimes(1);
  });
});
