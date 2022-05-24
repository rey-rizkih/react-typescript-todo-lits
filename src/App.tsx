import { Box, Typography } from "@mui/material";
import { useState } from "react";
import InputFields from "./components/input-fields";
import TodoList from "./containers/todo-list";
import type { Todo } from "./models/models";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log("TODOS : ", todos);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">Taskify</Typography>
      <InputFields value={todo} setValue={setTodo} onSubmit={handleAddTodo} />

      <TodoList todos={todos} setTodos={setTodos} />
    </Box>
  );
}

export default App;
