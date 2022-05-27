import { cleanup, render, screen, within } from "@testing-library/react";
// import { DragDropContext } from "react-beautiful-dnd";
// import TodoList from ".";
// import type { Todo } from "../../models/models";
// import {
//   DND_DIRECTION_UP,
//   makeDnd,
//   mockDndSpacing,
//   mockGetComputedStyle,
// } from "react-beautiful-dnd-test-utils";

// const mockTodos: Todo[] = [
//   {
//     id: 1,
//     isDone: false,
//     todo: "Todo 1",
//   },
//   {
//     id: 2,
//     isDone: false,
//     todo: "Todo 2",
//   },
// ];

// const mockCompletedTodos: Todo[] = [
//   {
//     id: 3,
//     isDone: true,
//     todo: "Completed Todo 1",
//   },
//   {
//     id: 4,
//     isDone: true,
//     todo: "Completed Todo",
//   },
// ];

// const verifyTodosOrderInColumn = (columnTestId:number, orderTodos:string[]) => {
//   const texts = within(screen.getByTestId(columnTestId)).getAllByText(orderTodos.join(''));
// }

// const renderTodoList = () => {
//   const { container } = render(
//     <DragDropContext onDragEnd={() => {}}>
//       <TodoList
//         todos={mockTodos}
//         completedTodos={mockCompletedTodos}
//         setTodos={() => {}}
//         setCompletedTodos={() => {}}
//       />
//     </DragDropContext>
//   );

//   mockDndSpacing(container);
// };

// beforeEach(mockGetComputedStyle);

// describe("DND TodoList", () => {
//   it("Move a task up", async () => {
//     renderTodoList();

//     await makeDnd({
//       text: mockTodos[1].todo,
//       direction: DND_DIRECTION_UP,
//       positions: 1,
//     });

//     ve
//   });
// });

// afterEach(cleanup);

// it("Should render TodoList correctly", () => {
//   renderApp();

//   screen.debug();

//   // const activeTask = screen.getByTestId("active-card");
//   // const completedTask = screen.getByTestId("completed-card");

//   // // Render all mock todos
//   // for (const key in mockTodos)
//   //   expect(activeTask).toHaveTextContent(mockTodos[key].todo);

//   // // Render all mock completed todos
//   // for (const key in mockCompletedTodos)
//   //   expect(completedTask).toHaveTextContent(mockCompletedTodos[key].todo);
// });

it("Should change background card when dragging over", () => {});
