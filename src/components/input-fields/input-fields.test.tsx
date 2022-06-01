import { shallow } from "enzyme";
import InputField from ".";

const mockInputFieldProps = {
  defaultValue: "",
  onSubmit: jest.fn(),
};

const testId = {
  form: '[data-testid="form-field"]',
  input: '[data-testid="input-field"]',
  button: '[data-testid="submit-button"]',
};

let wrapper;

describe("<InputField/> rendering", () => {
  beforeEach(() => {
    wrapper = shallow(<InputField {...mockInputFieldProps} />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one", () => {
    const form = wrapper.find(testId.form);
    expect(form).toHaveLength(1);
  });

  it("should render <InputStyled/> one", () => {
    const input = wrapper.find(testId.input);
    expect(input).toHaveLength(1);
  });

  it("should render <ButtonSubmit/> one", () => {
    const button = wrapper.find(testId.button);
    expect(button).toHaveLength(1);
  });

  describe("<InputField/> Interactions", () => {
    it("should change value when input value changed", () => {
      wrapper
        .find(testId.input)
        .simulate("change", { target: { value: "test" } });

      expect(wrapper.find(testId.input).prop("value")).toBe("test");
    });

    it("should not call onSubmit when value is empty", () => {
      wrapper.find(testId.input).simulate("change", { target: { value: "" } });

      wrapper.find(testId.form).simulate("submit", {
        preventDefault: () => {},
      });

      expect(mockInputFieldProps.onSubmit).not.toHaveBeenCalled();
    });

    it("should call onSubmit when submit form", () => {
      wrapper
        .find(testId.input)
        .simulate("change", { target: { value: "test" } });

      wrapper.find(testId.form).simulate("submit", {
        preventDefault: () => {},
      });

      expect(mockInputFieldProps.onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
