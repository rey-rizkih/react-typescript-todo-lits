import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface CardProps extends BoxProps {
  title: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children, ...props }) => {
  return (
    <CardContainer {...props}>
      <Typography variant="h2">{title}</Typography>

      {children}
    </CardContainer>
  );
};

const CardContainer = styled(Box)(({ theme }) => ({
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
}));

export default Card;
