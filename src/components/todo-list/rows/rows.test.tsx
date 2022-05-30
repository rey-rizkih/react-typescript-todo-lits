import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoRow from ".";
import type { Todo } from "../../../models/models";

configure({ adapter: new Adapter() });

const todos: Todo[] = [
  {
    id: "active-1",
    content: "Todo 1",
    isDone: false,
  },
];

jest.mock("../item");

const wrapper = shallow(
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
});
