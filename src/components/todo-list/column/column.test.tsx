import { shallow } from "enzyme";
import TodoColumn, { TodoColumnProps } from ".";

let wrapper;

const mockTodoColumnProps: TodoColumnProps = {
  column: {
    id: "active",
    title: "Active",
    rowsId: ["active-1", "active-2"],
  },
};

// jest.mock("react-beautiful-dnd", () => ({
//   Droppable: (props) => {
//     return <div data-testid="droppable" {...props} />;
//   },
// }));

describe("<TodoColumn/> rendering", () => {
  beforeEach(() => {
    wrapper = shallow(<TodoColumn {...mockTodoColumnProps} />);
  });

  // it("renders correctly", () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it("should render one", () => {
  //   expect(wrapper.find("Droppable").prop("children")()).toHaveLength(1);
  // });

  // it("should render <TodoRow/> for each todo", () => {
  //   expect(wrapper.find("TodoRow")).toHaveLength(
  //     mockTodoColumnProps.column.rowsId.length
  //   );
  // });
});
