import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/system";

interface TodoTitleProps extends TypographyProps {
  isDone?: boolean;
}

export const TodoTitle = styled(Typography)<TodoTitleProps>(({ isDone }) => ({
  flex: 1,
  padding: "5px",
  border: "none",
  fontSize: "20px",
  ...(isDone && {
    textDecoration: "line-through",
  }),
}));
