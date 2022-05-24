import { styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import type { TodoListProps } from "..";
import type { Todo } from "../../../models/models";
import TodoAction from "./action";
import TodoEdit from "./edit";

export interface TodoItemProps extends TodoListProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, todos, setTodos }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit) inputRef.current?.focus();
  }, [isEdit]);

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleEditTodo = (newTodo: Todo) => {
    setTodos(
      todos.map((item) => {
        // Set value where found
        if (item.id === todo.id) return newTodo;

        return item;
      })
    );

    setIsEdit(false);
  };

  const handleDeleteTodo = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const handleDone = () => {
    setTodos(
      todos.map((item) => {
        // Change isDone where found
        if (item.id === todo.id) item.isDone = !item.isDone;

        return item;
      })
    );
  };

  return (
    <TodoItemContainer>
      <TodoEdit isEdit={isEdit} todo={todo} onSubmit={handleEditTodo} />

      <TodoAction
        onEdit={handleIsEdit}
        onDelete={handleDeleteTodo}
        onDone={handleDone}
      />
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled("div")({
  display: "flex",
  borderRadius: "5px",
  padding: "20px",
  marginTop: "15px",
  backgroundImage: `url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg")`,
  color: "black",
  transition: "0.2s",
  ":hover": {
    boxShadow: "0 0 5px black",
    transform: "scale(1.03)",
  },
});

export default TodoItem;
