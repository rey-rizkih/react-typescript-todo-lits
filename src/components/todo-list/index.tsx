import { styled, useTheme } from "@mui/material";
import { Droppable } from "react-beautiful-dnd";
import Card from "../../components/card";
import type { Todo } from "../../models/models";
import TodoItem from "../todo-list/item";

export interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  const theme = useTheme();

  return (
    <TodoListContainer>
      {/* Active Task  */}
      <Droppable droppableId={`TodosList`}>
        {(provided, snapshot) => (
          <Card
            title="Active Tasks"
            bgcolor={
              theme.palette.secondary[snapshot.isDraggingOver ? "dark" : "main"]
            }
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todos.map((todo, index) => (
              <TodoItem
                key={todo.id}
                index={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </Card>
        )}
      </Droppable>

      {/* Complete Tasks  */}
      <Droppable droppableId={`TodosRemove}`}>
        {(provided, snapshot) => (
          <Card
            title="Competed Tasks"
            bgcolor={
              theme.palette.error[snapshot.isDraggingOver ? "dark" : "main"]
            }
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {completedTodos.map((completedTodo, index) => (
              <TodoItem
                key={completedTodo.id}
                index={index}
                todo={completedTodo}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </Card>
        )}
      </Droppable>
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
