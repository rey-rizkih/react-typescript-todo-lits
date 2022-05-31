import type { TodoColumns, Todos } from "../models/models";

export const initialTodo: {
  todos: Todos;
  columns: TodoColumns;
  columnOrder: string[];
} = {
  todos: {
    "todo-1": { id: "todo-1", content: "First Task", isDone: false },
  },

  columns: {
    active: {
      id: "active",
      title: "Active Tasks",
      rowsId: ["todo-1"],
      variant: "secondary",
    },
    completed: {
      id: "completed",
      title: "Completed Tasks",
      rowsId: [],
      variant: "error",
    },
  },

  columnOrder: ["active"],
};
