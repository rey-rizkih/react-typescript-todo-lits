import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoRow from ".";
import type { Todo } from "../../../models/models";
import renderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

const todos: Todo[] = [
  {
    id: "active-1",
    content: "Todo 1",
    isDone: false,
  },
];

const mockTodoItem = jest.fn();

jest.mock("../item", () => (props: unknown) => {
  mockTodoItem(props);
  const TodoComponent = "todo-item";
  //@ts-ignore
  return <TodoComponent data-testid="todo-item" {...props}></TodoComponent>;
});

const wrapper = Enzyme.shallow(
  <TodoRow
    todos={todos}
    actions={{
      onEdit: () => {},
      onDelete: () => {},
      onDone: () => {},
    }}
  />
);

let container: any, childContainer: any, childContainerProps: any;

describe("TodoRow", () => {
  beforeEach(() => {
    container = wrapper.find("Fragment");
  });

  it("should render a TodoItem for each todo", () => {
    // console.log(wrapper.debug());

    expect(container).toHaveLength(1);
  });

  describe("Child component", () => {
    beforeEach(() => {
      childContainer = wrapper.find("TodoItem");
      childContainerProps = childContainer.props();
    });

    it("should have a <TodoItem>", () => {
      expect(childContainer).toHaveLength(1);
    });

    it("should have label as prop", () => {
      expect(childContainerProps.todo).toEqual(todos[0]);
    });
  });

  it("Matches snapshot todo list", () => {
    const tree = renderer
      .create(
        <TodoRow
          todos={todos}
          actions={{
            onEdit: () => {},
            onDelete: () => {},
            onDone: () => {},
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
