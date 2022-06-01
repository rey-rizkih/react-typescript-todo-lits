import type { TodoColumns, Todos } from "src/models/models";

export const initialTodoColumns: TodoColumns = {
  active: {
    id: "active",
    title: "Active Tasks",
    rowsId: ["active-1"],
    variant: "secondary",
  },
  completed: {
    id: "completed",
    title: "Completed Tasks",
    rowsId: [],
    variant: "error",
  },
};

export const initialTodos: Todos = {
  "active-1": {
    id: "active-1",
    content: "First Task",
    isDone: false,
  },
};

export const initialColumnsOrder: string[] = ["active", "completed"];
