import Input from "@mui/material/Input";
import { styled } from "@mui/material";

export const InputStyled = styled(Input)({
  width: "100%",
  borderRadius: "50px",
  padding: "20px 30px",
  fontSize: "25px",
  border: "none",
  backgroundColor: "white",
  transition: "0.2s",
  boxShadow: "inset 0 0 5px black",
  fontFamily: "Arial",
  lineHeight: "normal",
  // Focus within childern and change parent style
  ":focus-within": {
    boxShadow: "0 0 10px 1000px rgba(0, 0, 0, 0.5)",
    outline: "none",
  },
  // Class name for the input
  ".MuiInput-input": {
    padding: 0,
    height: "auto",
  },
});
