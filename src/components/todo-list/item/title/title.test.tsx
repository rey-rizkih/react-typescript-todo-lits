import { shallow } from "enzyme";
import { TodoTitle } from ".";

let wrapper;

const titleTestId = '[data-testid="todo-title"]';

describe("<TodoTitle/> rendering", () => {
  beforeEach(() => {
    wrapper = shallow(
      <TodoTitle data-testid="todo-title">Test Title</TodoTitle>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one", () => {
    expect(wrapper.find(titleTestId)).toHaveLength(1);
  });

  it("shoudl render children correctly", () => {
    expect(wrapper.find(titleTestId).text()).toEqual("Test Title");
  });

  it("should have props isDone when isDone is true", () => {
    wrapper.setProps({ isDone: true });

    expect(wrapper.find(titleTestId).prop("isDone")).toBe(true);
  });
});
