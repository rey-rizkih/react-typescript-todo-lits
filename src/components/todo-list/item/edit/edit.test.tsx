import { shallow } from "enzyme";
import TodoEdit, { TodoEditProps } from ".";

const mockEditTodoProps: TodoEditProps = {
  isEdit: false,
  isDone: false,
  value: "test todo",
  onSubmit: jest.fn(),
};

const testId = {
  box: '[data-testid="edit-box"]',
  textField: '[data-testid="edit-text-field"]',
  title: '[data-testid="edit-title"]',
};

let wrapper;

describe("<TodoEdit/> rendering", () => {
  beforeEach(() => {
    wrapper = shallow(<TodoEdit {...mockEditTodoProps} />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one", () => {
    const box = wrapper.find(testId.box);
    expect(box).toHaveLength(1);
  });

  it("should not render <TextField/> one when isEdit false", () => {
    const textField = wrapper.find(testId.textField);
    expect(textField).toHaveLength(0);
  });

  it("should render <TodoTitle/> one when isEdit false", () => {
    const title = wrapper.find(testId.title);
    expect(title).toHaveLength(1);
  });

  it('shoudl have isDone prop as "true" when isDone true', () => {
    wrapper.setProps({ isDone: true });

    const title = wrapper.find(testId.title);
    expect(title.prop("isDone")).toBe(true);
  });

  describe("Rendering when isEdit is true", () => {
    beforeEach(() => {
      wrapper.setProps({ isEdit: true });
    });

    it("should render <TextField/> one when isEdit true", () => {
      const textField = wrapper.find(testId.textField);
      expect(textField).toHaveLength(1);
    });

    it("should not render <TodoTitle/> when isEdit true", () => {
      const title = wrapper.find(testId.title);
      expect(title).toHaveLength(0);
    });

    describe("<TodoEdit/> editing interactions", () => {
      it("should change props value when input value changed", () => {
        wrapper
          .find(testId.textField)
          .simulate("change", { target: { value: "test" } });

        expect(wrapper.find(testId.textField).prop("value")).toBe("test");
      });

      it("should not call onSubmit when value is empty", () => {
        wrapper.find(testId.textField).simulate("change", {
          target: { value: "" },
        });

        wrapper.find(testId.textField).simulate("blur");

        expect(mockEditTodoProps.onSubmit).not.toHaveBeenCalled();
      });

      it("should call onSubmit when submit form", () => {
        wrapper
          .find(testId.textField)
          .simulate("change", { target: { value: "test" } });

        wrapper.find(testId.box).simulate("submit", {
          preventDefault: () => {},
        });

        expect(mockEditTodoProps.onSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
