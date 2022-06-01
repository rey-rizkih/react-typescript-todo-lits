import { styled } from "@mui/material";
import type { TodoColumns, Todos } from "../../models/models";
import TodoColumn from "./column";
import { TodoItemActionsProps } from "./item";
import TodoRow from "./rows";

export interface TodoListProps {
  columns: TodoColumns;
  columnOrder: string[];
  todos: Todos;
  actions: TodoItemActionsProps;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  columns,
  columnOrder,
  actions,
}) => {
  return (
    <TodoListContainer data-testid="todolist-container">
      {columnOrder.map((columnId) => {
        const column = columns[columnId];

        // Set todos from column rowsId
        const todosInColumn = column.rowsId.map((rowId) => todos[rowId]);

        return (
          <TodoColumn
            key={columnId}
            column={column}
            data-testid="todolist-column"
          >
            <TodoRow
              todos={todosInColumn}
              actions={actions}
              data-testid="todolist-row"
            />
          </TodoColumn>
        );
      })}
    </TodoListContainer>
  );
};

const TodoListContainer = styled("div")(({ theme }) => ({
  width: "95%",
  display: "flex",
  marginTop: "10px",
  justifyContent: "space-between",
  alignItems: "flex-start",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export default TodoList;
