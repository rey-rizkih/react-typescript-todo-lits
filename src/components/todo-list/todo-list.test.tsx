import { cleanup, render } from "@testing-library/react";
import TodoList from ".";
import { TodoColumns, Todos } from "../../models/models";
import { TodoColumnProps } from "./column";

const columns: TodoColumns = {
  active: {
    id: "active",
    title: "Active Tasks",
    rowsId: ["active-1"],
    variant: "secondary",
  },
  completed: {
    id: "completed",
    title: "Completed Tasks",
    rowsId: [],
    variant: "error",
  },
};

const todos: Todos = {
  "active-1": {
    id: "active-1",
    content: "First Task",
    isDone: false,
  },
};

const renderTodoList = (props: Partial<TodoColumnProps> = {}) => {
  render(
    <TodoList
      columns={columns}
      columnOrder={["active", "completed"]}
      todos={todos}
      actions={{
        onEdit: () => {},
        onDelete: () => {},
        onDone: () => {},
      }}
      {...props}
    />
  );
};

const mockTodoColumn = jest.fn();
const mockTodoRow = jest.fn();

jest.mock("./column", () => (props: unknown) => {
  mockTodoColumn(props);
  return <div data-testid="todo-column" {...props}></div>;
});

jest.mock("./rows", () => (props: unknown) => {
  mockTodoRow(props);
  return <div data-testid="todo-row"></div>;
});

afterEach(cleanup);

it("Should render column correctly", async () => {
  renderTodoList();

  // Checking column component props
  expect(mockTodoColumn).toHaveBeenCalledWith(
    expect.objectContaining({
      column: columns.active,
    })
  );

  // Checking column component props
  expect(mockTodoColumn).toHaveBeenCalledWith(
    expect.objectContaining({
      column: columns.completed,
    })
  );
});

it("Should render row correctly", async () => {
  renderTodoList();

  // Checking row component props
  expect(mockTodoRow).toHaveBeenCalledWith(
    expect.objectContaining({
      todos: [todos["active-1"]],
    })
  );

  // Checking row component props
  expect(mockTodoRow).toHaveBeenCalledWith(
    expect.objectContaining({
      todos: [],
    })
  );
});
