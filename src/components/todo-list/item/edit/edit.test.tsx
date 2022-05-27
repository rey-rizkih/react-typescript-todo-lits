import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoEdit from ".";
import type { Todo } from "../../../../models/models";
import renderer from "react-test-renderer";

const mockTodo: Todo = {
  id: 123,
  isDone: false,
  todo: "test todo",
};

afterEach(cleanup);

it("Rendered a title when isEdit false", () => {
  render(<TodoEdit isEdit={false} todo={mockTodo} onSubmit={() => {}} />);
  const title = screen.getByText(mockTodo.todo);

  expect(title).toHaveTextContent(mockTodo.todo);
});

it("Rendered a input field when isEdit true", () => {
  render(<TodoEdit isEdit todo={mockTodo} onSubmit={() => {}} />);
  const inputField = screen.getByRole("textbox");

  expect(inputField).toHaveValue(mockTodo.todo);
});

it("Should be able to edit a value", () => {
  render(<TodoEdit isEdit todo={mockTodo} onSubmit={() => {}} />);
  const inputField = screen.getByRole("textbox");

  userEvent.type(inputField, " edit");

  expect(inputField).toHaveValue(`${mockTodo.todo} edit`);
});

it("Should be submit when submit button clicked", () => {
  const handleSubmitTest = jest.fn();

  render(<TodoEdit isEdit todo={mockTodo} onSubmit={handleSubmitTest} />);
  const inputField = screen.getByRole("textbox");

  userEvent.type(inputField, " edit{enter}");

  expect(handleSubmitTest).toHaveBeenCalledTimes(1);
});

it("Should not be submit when value is empty", () => {
  const handleSubmitTest = jest.fn();

  render(<TodoEdit isEdit todo={mockTodo} onSubmit={handleSubmitTest} />);
  const inputField = screen.getByRole("textbox");

  userEvent.clear(inputField);
  userEvent.type(inputField, "{enter}");

  expect(handleSubmitTest).not.toBeCalled();
});

it("Should not be submit when only whitespace", () => {
  const handleSubmitTest = jest.fn();

  render(<TodoEdit isEdit todo={mockTodo} onSubmit={handleSubmitTest} />);
  const inputField = screen.getByRole("textbox");

  userEvent.clear(inputField);
  userEvent.type(inputField, " {enter}");

  expect(handleSubmitTest).not.toBeCalled();
});

it("Matches snapshot isEdit", () => {
  const tree = renderer
    .create(<TodoEdit isEdit todo={mockTodo} onSubmit={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Matches snapshot isNotEdit", () => {
  const tree = renderer
    .create(<TodoEdit isEdit={false} todo={mockTodo} onSubmit={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
