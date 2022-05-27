import { render, screen, cleanup } from "@testing-library/react";
import Card from ".";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders in window", () => {
  render(<Card title="Test"></Card>);
  const card = screen.getByTestId("card");

  expect(card).toBeInTheDocument();
});

it("Renders button correctly", () => {
  render(<Card title="Test"></Card>);
  const card = screen.getByTestId("card");

  expect(card).toHaveTextContent("Test");
});

it("Matches snapshot", () => {
  const tree = renderer.create(<Card title="Test"></Card>).toJSON();
  expect(tree).toMatchSnapshot();
});
