import { shallow } from "enzyme";
import TodoRow, { TodoRowProps } from ".";

const mockTodoRowProps: TodoRowProps = {
  todos: [
    {
      id: "active-1",
      content: "Todo 1",
      isDone: false,
    },
    {
      id: "active-2",
      content: "Todo 2",
      isDone: false,
    },
  ],
  actions: {
    onEdit: jest.fn(),
    onDelete: jest.fn(),
    onDone: jest.fn(),
  },
};

let wrapper;

describe("<TodoRow/> rendering", () => {
  beforeEach(() => {
    wrapper = shallow(<TodoRow {...mockTodoRowProps} />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one", () => {
    expect(wrapper.find("Fragment")).toHaveLength(1);
  });

  it("should render <TodoItem/> for each todo", () => {
    expect(wrapper.find("TodoItem")).toHaveLength(
      mockTodoRowProps.todos.length
    );
  });
});
