import { shallow } from "enzyme";
import { InputStyled } from ".";

describe("<Input/> rendering", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<InputStyled data-testid="input" />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one", () => {
    expect(wrapper.find("[data-testid='input']")).toHaveLength(1);
  });
});
