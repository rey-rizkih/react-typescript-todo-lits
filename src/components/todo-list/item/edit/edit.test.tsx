import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoEdit from ".";
import type { Todo } from "../../../../models/models";
import renderer from "react-test-renderer";

const mockTodo: Todo = {
  id: "123",
  isDone: false,
  content: "test todo",
};

afterEach(cleanup);

it("Rendered a title when isEdit false", () => {
  render(
    <TodoEdit isEdit={false} value={mockTodo.content} onSubmit={() => {}} />
  );
  const title = screen.getByText(mockTodo.content);

  expect(title).toHaveTextContent(mockTodo.content);
});

it("Rendered a input field when isEdit true", () => {
  render(<TodoEdit isEdit value={mockTodo.content} onSubmit={() => {}} />);
  const inputField = screen.getByRole("textbox");

  expect(inputField).toHaveValue(mockTodo.content);
});

it("Should be able to edit a value", () => {
  render(<TodoEdit isEdit value={mockTodo.content} onSubmit={() => {}} />);
  const inputField = screen.getByRole("textbox");

  userEvent.type(inputField, " edit");

  expect(inputField).toHaveValue(`${mockTodo.content} edit`);
});

it("Should be submit when submit button clicked", () => {
  const handleSubmitTest = jest.fn();

  render(
    <TodoEdit isEdit value={mockTodo.content} onSubmit={handleSubmitTest} />
  );
  const inputField = screen.getByRole("textbox");

  userEvent.type(inputField, " edit{enter}");

  expect(handleSubmitTest).toHaveBeenCalledTimes(1);
});

it("Should not be submit when value is empty", () => {
  const handleSubmitTest = jest.fn();

  render(
    <TodoEdit isEdit value={mockTodo.content} onSubmit={handleSubmitTest} />
  );
  const inputField = screen.getByRole("textbox");

  userEvent.clear(inputField);
  userEvent.type(inputField, "{enter}");

  expect(handleSubmitTest).not.toBeCalled();
});

it("Should not be submit when only whitespace", () => {
  const handleSubmitTest = jest.fn();

  render(
    <TodoEdit isEdit value={mockTodo.content} onSubmit={handleSubmitTest} />
  );
  const inputField = screen.getByRole("textbox");

  userEvent.clear(inputField);
  userEvent.type(inputField, " {enter}");

  expect(handleSubmitTest).not.toBeCalled();
});

it("Matches snapshot isEdit", () => {
  const tree = renderer
    .create(<TodoEdit isEdit value={mockTodo.content} onSubmit={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Matches snapshot isNotEdit", () => {
  const tree = renderer
    .create(
      <TodoEdit isEdit={false} value={mockTodo.content} onSubmit={() => {}} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
