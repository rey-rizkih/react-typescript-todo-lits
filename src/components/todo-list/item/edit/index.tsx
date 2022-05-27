import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { forwardRef, useState } from "react";
import { TodoTitle } from "../title";

export interface TodoEditProps {
  isEdit?: boolean;
  isDone?: boolean;
  value: string;
  onSubmit: (value: string) => void;
}

const TodoEdit = forwardRef<HTMLInputElement, TodoEditProps>(
  ({ isEdit, isDone, value, onSubmit }, inputRef) => {
    const [editTodo, setEditTodo] = useState<string>(value);

    const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditTodo(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      // Prevent a empty or only whitespace value
      if (editTodo.trim() === "") return;

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
            value={editTodo}
            onChange={handleOnInputChange}
          />
        ) : (
          // Show Title when isEdit false
          <TodoTitle isDone={isDone}>{value}</TodoTitle>
        )}
      </Box>
    );
  }
);

export default TodoEdit;
