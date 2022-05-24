import Check from "@mui/icons-material/Check";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material";

export interface TodoActionProps {
  onDelete: () => void;
  onEdit: () => void;
  onDone: () => void;
}

const TodoAction: React.FC<TodoActionProps> = ({
  onDelete,
  onEdit,
  onDone,
}) => {
  return (
    <ActionContainer>
      <IconButton color="inherit" aria-label="edit todo" onClick={onEdit}>
        <Edit />
      </IconButton>

      <IconButton color="inherit" aria-label="edit todo" onClick={onDelete}>
        <Delete />
      </IconButton>

      <IconButton color="inherit" aria-label="delete todo" onClick={onDone}>
        <Check />
      </IconButton>
    </ActionContainer>
  );
};

const ActionContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginLeft: "10px",
});

export default TodoAction;
