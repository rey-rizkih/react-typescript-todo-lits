import { Box, styled, Typography } from "@mui/material";

const CardContainer = styled(Box)(({ theme }) => ({
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  width: "47.5%",
  padding: "15px",
  backgroundColor: theme.palette.secondary.main,
}));

const Card = () => {
  return (
    <CardContainer>
      <Typography variant="h2">Title</Typography>
    </CardContainer>
  );
};

export default Card;
