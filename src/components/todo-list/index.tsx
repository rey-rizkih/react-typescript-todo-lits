import { styled, useTheme } from "@mui/material";
import Card from "../../components/card";
import type { Todo } from "../../models/models";
import TodoItem from "../todo-list/item";

export interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const theme = useTheme();

  return (
    <TodoListContainer>
      {/* Active Task  */}
      <Card title="Active Tasks" bgcolor={theme.palette.secondary.main}>
        {todos.map((todo) => (
          <TodoItem todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </Card>

      {/* Complete Tasks  */}
      <Card title="Competed Tasks" bgcolor={theme.palette.error.main}>
        {todos.map((todo) => (
          <TodoItem todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </Card>
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
