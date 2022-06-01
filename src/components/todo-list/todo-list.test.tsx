import { shallow } from "enzyme";
import TodoList, { TodoListProps } from ".";

const mockTodoListProps: TodoListProps = {
  columns: {
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
  },
  columnOrder: ["active", "completed"],
  todos: {
    "active-1": {
      id: "active-1",
      content: "First Task",
      isDone: false,
    },
  },
  actions: {
    onEdit: jest.fn(),
    onDelete: jest.fn(),
    onDone: jest.fn(),
  },
};

const testId = {
  container: '[data-testid="todolist-container"]',
  column: '[data-testid="todolist-column"]',
  row: '[data-testid="todolist-row"]',
};

let wrapper;

describe("<TodoList/> rendering", () => {
  beforeEach(() => {
    wrapper = shallow(<TodoList {...mockTodoListProps} />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one", () => {
    const container = wrapper.find(testId.container);
    expect(container).toHaveLength(1);
  });

  it("should render <TodoColumn/> for each column", () => {
    expect(wrapper.find(testId.column)).toHaveLength(
      mockTodoListProps.columnOrder.length
    );
  });

  it("should render <TodoRow/> for each column", () => {
    expect(wrapper.find(testId.row)).toHaveLength(
      mockTodoListProps.columnOrder.length
    );
  });
});
