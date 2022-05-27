import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoAction, { TodoActionProps } from ".";
import renderer from "react-test-renderer";

const mockActionProps: TodoActionProps = {
  onDelete: jest.fn(),
  onEdit: jest.fn(),
  onDone: jest.fn(),
};

const renderTodoAction = (props: TodoActionProps) => {
  render(<TodoAction {...props} />);
};

afterEach(cleanup);

it("Should be call a edit function", () => {
  renderTodoAction(mockActionProps);

  const editButton = screen.getByRole("button", { name: "edit todo" });

  userEvent.click(editButton);

  expect(mockActionProps.onEdit).toHaveBeenCalledTimes(1);
});

it("Should be call a delete function", () => {
  renderTodoAction(mockActionProps);

  const deleteButton = screen.getByRole("button", { name: "delete todo" });

  userEvent.click(deleteButton);

  expect(mockActionProps.onDelete).toHaveBeenCalledTimes(1);
});

it("Should be call a check function", () => {
  renderTodoAction(mockActionProps);

  const checkButton = screen.getByRole("button", { name: "check todo" });

  userEvent.click(checkButton);

  expect(mockActionProps.onDone).toHaveBeenCalledTimes(1);
});

it("Matches snapshot todo action", () => {
  const tree = renderer.create(<TodoAction {...mockActionProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
