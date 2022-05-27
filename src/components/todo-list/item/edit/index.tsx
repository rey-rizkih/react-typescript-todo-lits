import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { forwardRef, useState } from "react";
import { TodoTitle } from "../title";
import type { Todo } from "../../../../models/models";

export interface TodoEditProps {
  isEdit: boolean;
  todo: Todo;
  onSubmit: (value: Todo) => void;
}

const TodoEdit = forwardRef<HTMLInputElement, TodoEditProps>(
  ({ isEdit, todo, onSubmit }, inputRef) => {
    const [editTodo, setEditTodo] = useState<Todo>(todo);

    const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditTodo((prev) => ({
        ...prev,
        todo: e.target.value,
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      // Prevent a empty or only whitespace value
      if (editTodo.todo.trim() === "") return;

      onSubmit(editTodo);
    };

    return (
      <Box component="form" onSubmit={handleSubmit} flex={1}>
        {/* Show Text Field when isEdit true */}
        {isEdit ? (
          <TextField
            fullWidth
            inputRef={inputRef}
            sx={(theme) => ({
              backgroundColor: theme.palette.background.paper,
            })}
            value={editTodo.todo}
            onChange={handleOnInputChange}
          />
        ) : (
          <TodoTitle isdone={todo.isDone}>{todo.todo}</TodoTitle>
        )}
      </Box>
    );
  }
);

export default TodoEdit;
