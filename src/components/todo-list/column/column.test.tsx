import { shallow } from "enzyme";
import TodoColumn, { TodoColumnProps } from ".";

const mockTodoColumnProps: TodoColumnProps = {
  column: {
    id: "active",
    title: "Active",
    rowsId: ["active-1", "active-2"],
  },
};

jest.mock("react-beautiful-dnd", () => ({
  Droppable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {},
        },
        provided: {
          innerRef: jest.fn(),
        },
      },
      {}
    ),
  Draggable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      },
      {}
    ),
  DragDropContext: ({ children }) => children,
}));

let wrapper;

describe("<TodoColumn/> rendering", () => {
  beforeEach(() => {
    wrapper = shallow(<TodoColumn {...mockTodoColumnProps} />);
  });

  // it("renders correctly", () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

  it("should render one", () => {
    expect(wrapper.find("Droppable")).toHaveLength(1);
  });

  it("should have an children", () => {
    expect(
      wrapper.find("Droppable").renderProp("children")()
    ).toHaveBeenCalled();
  });

  // it("should render <TodoRow/> for each todo", () => {
  //   expect(wrapper.find("TodoRow")).toHaveLength(
  //     mockTodoColumnProps.column.rowsId.length
  //   );
  // });
});
