import { styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import type { Todo } from "../../../models/models";
import TodoAction from "./action";
import TodoEdit from "./edit";

export interface TodoItemActionsProps {
  onEdit: (id: string, value: string) => void;
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
}

export interface TodoItemProps {
  index: number;
  todo: Todo;
  actions: TodoItemActionsProps;
}

const TodoItem: React.FC<TodoItemProps> = ({
  index,
  todo,
  actions: { onEdit, onDelete, onDone },
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus on input when edit is triggered
    if (isEdit) inputRef.current?.focus();
  }, [isEdit]);

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <TodoItemContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <TodoEdit
            isEdit={isEdit}
            isDone={todo.isDone}
            value={todo.content}
            onSubmit={(value) => onEdit(todo.id, value)}
          />

          <TodoAction
            onEdit={handleIsEdit}
            onDelete={() => onDelete(todo.id)}
            onDone={() => onDone(todo.id)}
          />
        </TodoItemContainer>
      )}
    </Draggable>
  );
};

const TodoItemContainer = styled("div")<{ isDragging: boolean }>(
  ({ isDragging }) => ({
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

    // Add box shadow when dragging
    ...(isDragging && { boxShadow: "0 0 20px black" }),
  })
);

export default TodoItem;
