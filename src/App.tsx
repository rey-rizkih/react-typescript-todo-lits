import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import InputFields from "./components/input-fields";
import TodoList from "./components/todo-list";
import type { Todo } from "./models/models";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (value: string) => {
    setTodos([...todos, { id: Date.now(), todo: value, isDone: false }]);
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
      <InputFields onSubmit={handleAddTodo} />

      <TodoList todos={todos} setTodos={setTodos} />
    </Box>
  );
}

export default App;
