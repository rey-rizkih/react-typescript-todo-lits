import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Droppable } from "react-beautiful-dnd";
import type { Column } from "../../../models/models";
import type { ColorVariants } from "../../../styles/theme";

export interface TodoContainerProps {
  variant?: ColorVariants;
  isDraggingOver?: boolean;
}

export interface TodoColumnProps extends BoxProps {
  column: Column & { variant?: ColorVariants };
}

const TodoColumn = ({
  column,
  children,
}: React.PropsWithChildren<TodoColumnProps>) => {
  return (
    <Droppable droppableId={column.id} type="TASK">
      {(provided, snapshot) => (
        <TodoColumnContainer
          ref={provided.innerRef}
          variant={column.variant}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          <Typography variant="h2">{column.title}</Typography>

          {children}

          {provided.placeholder}
        </TodoColumnContainer>
      )}
    </Droppable>
  );
};

const TodoColumnContainer = styled(Box)<TodoContainerProps>(
  ({ theme, variant = "primary", isDraggingOver }) => ({
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    width: "47.5%",
    padding: "15px",

    [theme.breakpoints.down("lg")]: {
      width: "45%",
    },

    [theme.breakpoints.down("md")]: {
      width: "95%",
      marginBottom: "10px",
    },

    background: theme.palette[variant][isDraggingOver ? "dark" : "main"],
  })
);

export default TodoColumn;
