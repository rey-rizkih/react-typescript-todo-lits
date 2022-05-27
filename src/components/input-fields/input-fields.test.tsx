import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from ".";

afterEach(cleanup);

const testValue = "test value";

it("Rendered in window", () => {
  render(<InputField onSubmit={() => {}} />);
  const inputField = screen.getByPlaceholderText("Enter a Task");

  expect(inputField).toBeInTheDocument();
});

it("Rendered with default value", () => {
  render(<InputField defaultValue={testValue} onSubmit={() => {}} />);
  const inputField = screen.getByPlaceholderText("Enter a Task");

  expect(inputField).toHaveValue(testValue);
});

it("Should be able to input a value", () => {
  render(<InputField onSubmit={() => {}} />);
  const inputField = screen.getByPlaceholderText("Enter a Task");

  userEvent.type(inputField, testValue);

  expect(inputField).toHaveValue(testValue);
});

it("Should be submit when submit button clicked", () => {
  const handleSubmitTest = jest.fn();

  render(<InputField onSubmit={handleSubmitTest} />);
  const inputField = screen.getByPlaceholderText("Enter a Task");
  const submitButton = screen.getByTestId("submit-input-field");

  userEvent.type(inputField, testValue);
  userEvent.click(submitButton);

  expect(handleSubmitTest).toHaveBeenCalledTimes(1);
});

it("Should be submit when press enter on keyboard", () => {
  const handleSubmitTest = jest.fn();

  render(<InputField onSubmit={handleSubmitTest} />);
  const inputField = screen.getByPlaceholderText("Enter a Task");

  userEvent.type(inputField, `${testValue}{enter}`);

  expect(handleSubmitTest).toHaveBeenCalledTimes(1);
});

it("Should be clear value when submit", () => {
  const handleSubmitTest = jest.fn();

  render(<InputField onSubmit={handleSubmitTest} />);
  const inputField = screen.getByPlaceholderText("Enter a Task");

  userEvent.type(inputField, `${testValue}{enter}`);

  expect(inputField).toHaveValue("");
});

it("Should be blur when submit", () => {
  const handleSubmitTest = jest.fn();

  render(<InputField onSubmit={handleSubmitTest} />);
  const inputField = screen.getByPlaceholderText("Enter a Task");

  userEvent.type(inputField, `${testValue}{enter}`);

  expect(inputField).not.toHaveFocus();
});
