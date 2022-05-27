import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import { InputStyled } from ".";

afterEach(cleanup);

const dataTestId = "input";

it("Rendered in window", () => {
  render(<InputStyled inputProps={{ "data-testid": dataTestId }} />);
  const input = screen.getByTestId(dataTestId);

  expect(input).toBeInTheDocument();
});

it("Rendered with placeholder", () => {
  const placeholder = "test placeholder";

  render(
    <InputStyled
      inputProps={{ "data-testid": dataTestId }}
      placeholder={placeholder}
    />
  );
  const input = screen.getByPlaceholderText(placeholder);

  expect(input).toBeInTheDocument();
});

it("Rendered with default value", () => {
  const defaultValue = "test value";

  render(
    <InputStyled
      inputProps={{ "data-testid": dataTestId }}
      defaultValue={defaultValue}
    />
  );
  const input = screen.getByTestId(dataTestId);

  expect(input).toHaveValue(defaultValue);
});

it("should input a value", () => {
  const value = "test value";

  render(<InputStyled inputProps={{ "data-testid": dataTestId }} />);
  const input = screen.getByTestId(dataTestId);

  userEvent.type(input, value);

  expect(input).toHaveValue(value);
});

it("Matches snapshot", () => {
  const tree = renderer
    .create(<InputStyled inputProps={{ "data-testid": dataTestId }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
