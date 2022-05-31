import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import InputFields from "./components/input-fields";
import TodoList from "./components/todo-list";
import { initialTodo } from "./data/todo.data";
import type { Todos, TodoColumn, TodoColumns } from "./models/models";
import { reorder } from "./utils/reoder";

function App() {
  const [todos, setTodos] = useState<Todos>(initialTodo.todos);
  const [columns, setColumns] = useState<TodoColumns>(initialTodo.columns);

  const handleAddTodo = (value: string) => {
    const id = `active-${Date.now().toString()}`;

    setTodos((prev) => ({
      ...prev,
      [id]: {
        id,
        content: value,
        isDone: false,
      },
    }));

    setColumns((prev) => ({
      ...prev,
      active: {
        ...prev.active,
        rowsId: [id, ...prev.active.rowsId],
      },
    }));
  };

  const handleEditTodo = (id: string, value: string) => {
    setTodos((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        content: value,
      },
    }));
  };

  const handleDeleteTodo = (id: string) => {
    // Removing item from todos
    setTodos((prev) => {
      const newTodos = { ...prev };
      delete newTodos[id];
      return newTodos;
    });

    // Removing todo id from columns rowsId
    setColumns((prev) => ({
      ...prev,
      active: {
        ...prev.active,
        rowsId: prev.active.rowsId.filter((item) => item !== id),
      },
    }));
  };

  const handleChecklistTodo = (id: string) => {
    setTodos((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isDone: !prev[id].isDone,
      },
    }));
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // When drag to not found destionation
    if (!destination) return;
    // When drag to same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const home = columns[source.droppableId];
    const foreign = columns[destination.droppableId];

    // Move in same column
    if (home === foreign) {
      const newColumn: TodoColumn = {
        ...home,
        rowsId: reorder<string>(home.rowsId, source.index, destination.index),
      };

      setColumns((prev) => ({
        ...prev,
        [newColumn.id]: newColumn,
      }));

      return;
    }

    // Move to another column
    const homeRowsIds = Array.from(home.rowsId);
    homeRowsIds.splice(source.index, 1);

    const newHome = {
      ...home,
      rowsId: homeRowsIds,
    };

    const foreignRowsIds = Array.from(foreign.rowsId);
    foreignRowsIds.splice(destination.index, 0, draggableId);

    const newForeign = {
      ...foreign,
      rowsId: foreignRowsIds,
    };

    setColumns((prev) => ({
      ...prev,
      [newHome.id]: newHome,
      [newForeign.id]: newForeign,
    }));
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
          columns={columns}
          columnOrder={["active", "completed"]}
          todos={todos}
          actions={{
            onEdit: handleEditTodo,
            onDelete: handleDeleteTodo,
            onDone: handleChecklistTodo,
          }}
        />
      </Box>
    </DragDropContext>
  );
}

export default App;
