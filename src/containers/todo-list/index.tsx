import { styled } from "@mui/material";
import type { Todo } from "../../models/models";
import TodoItem from "./item";

export interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </TodoListContainer>
  );
};

const TodoListContainer = styled("div")({
  width: "90%",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
});

export default TodoList;
