import { shallow } from "enzyme";
import TodoAction, { TodoActionProps } from ".";

let wrapper;

const mockActionProps: TodoActionProps = {
  onDelete: jest.fn(),
  onEdit: jest.fn(),
  onDone: jest.fn(),
};

const testId = {
  actionContainer: '[data-testid="action-container"]',
  editButton: '[data-testid="edit-button"]',
  deleteButton: '[data-testid="delete-button"]',
  doneButton: '[data-testid="check-button"]',
};

describe("<TodoAction/> rendering", () => {
  beforeEach(() => {
    wrapper = shallow(<TodoAction {...mockActionProps} />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one", () => {
    expect(wrapper.find(testId.actionContainer)).toHaveLength(1);
  });

  it("should render <IconButton/> for each todo", () => {
    expect(wrapper.find(testId.editButton)).toHaveLength(1);
    expect(wrapper.find(testId.deleteButton)).toHaveLength(1);
    expect(wrapper.find(testId.doneButton)).toHaveLength(1);
  });

  describe("<TodoAction/> interactions", () => {
    it("should call onDelete when delete button clicked", () => {
      wrapper.find(testId.deleteButton).simulate("click");

      expect(mockActionProps.onDelete).toHaveBeenCalled();
    });

    it("should call onEdit when edit button clicked", () => {
      wrapper.find(testId.editButton).simulate("click");

      expect(mockActionProps.onEdit).toHaveBeenCalled();
    });

    it("should call onDone when done button clicked", () => {
      wrapper.find(testId.doneButton).simulate("click");

      expect(mockActionProps.onDone).toHaveBeenCalled();
    });
  });
});
