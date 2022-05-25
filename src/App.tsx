import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import InputFields from "./components/input-fields";
import TodoList from "./components/todo-list";
import type { Todo } from "./models/models";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddTodo = (value: string) => {
    setTodos([...todos, { id: Date.now(), todo: value, isDone: false }]);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // When drag to not found destionation
    if (!destination) return;
    // When drag to same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      complete = completedTodos;

    // Move source
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Move destination
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">Taskify</Typography>
        <InputFields onSubmit={handleAddTodo} />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </Box>
    </DragDropContext>
  );
}

export default App;
