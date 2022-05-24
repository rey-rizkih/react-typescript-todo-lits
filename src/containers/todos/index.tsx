import { Box, styled } from "@mui/material";
import Card from "../../components/card";

const TodosContainer = styled(Box)({
  width: "95%",
  display: "flex",
  marginTop: "10px",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

const Todos = () => {
  return (
    <TodosContainer>
      <Card />
      <Card />
    </TodosContainer>
  );
};

export default Todos;
