import type { Todo } from "../../../models/models";
import TodoItem, { TodoItemActionsProps } from "../item";

export interface TodoRowProps {
  todos: Todo[];
  actions: TodoItemActionsProps;
}

const TodoRow: React.FC<TodoRowProps> = ({ todos, actions }) => {
  return (
    <>
      {todos?.map((todo, index) => (
        <TodoItem key={todo.id} index={index} todo={todo} actions={actions} />
      ))}
    </>
  );
};

export default TodoRow;
