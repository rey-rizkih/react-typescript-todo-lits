import type { ColorVariants } from "../styles/theme";

export interface Column<T = string> {
  id: string;
  title: string;
  rowsId: T[];
}

export type TodoColumn = Column & { variant?: ColorVariants };

export interface TodoColumns {
  [key: string]: TodoColumn;
}

export interface Todo {
  id: string;
  content: string;
  isDone: boolean;
}

export interface Todos {
  [key: string]: Todo;
}
