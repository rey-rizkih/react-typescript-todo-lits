import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/system";

interface TodoTitleProps extends TypographyProps {
  isdone?: boolean;
}

export const TodoTitle = styled(Typography)<TodoTitleProps>(({ isdone }) => ({
  flex: 1,
  padding: "5px",
  border: "none",
  fontSize: "20px",

  ...(isdone && {
    textDecoration: "line-through",
  }),
}));
