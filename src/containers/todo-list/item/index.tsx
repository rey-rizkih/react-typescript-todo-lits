import { Check, Delete, Edit } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { TodoListProps } from "..";
import type { Todo } from "../../../models/models";

export interface TodoItemProps extends TodoListProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, todos, setTodos }) => {
  return (
    <TodoItemContainer>
      <Title>{todo.todo}</Title>

      <div>
        <Icon>
          <Edit />
        </Icon>
        <Icon>
          <Delete />
        </Icon>
        <Icon>
          <Check />
        </Icon>
      </div>
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled("form")(({ theme }) => ({
  display: "flex",
  width: "41.5%",
  borderRadius: "5px",
  padding: "20px",
  marginTop: "15px",
  backgroundImage: `url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg")`,
  color: "black",
  transition: "0.2s",
  ":hover": {
    boxShadow: "0 0 5px black",
    transform: "scale(1.03)",
  },
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
}));

const Title = styled(Typography)({
  flex: 1,
  padding: "5px",
  border: "none",
  fontSize: "20px",
});

const Icon = styled("span")({
  marginLeft: "10px",
  fontSize: "25px",
  cursor: "pointer",
});

export default TodoItem;
