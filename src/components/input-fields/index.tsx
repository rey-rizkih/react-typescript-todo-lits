import { Button, Input, styled } from "@mui/material";
import { useRef } from "react";

export interface InputFieldsProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => void;
}

const InputFields: React.FC<InputFieldsProps> = ({
  value,
  setValue,
  onSubmit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
    inputRef.current?.blur();
  };

  return (
    <FormField onSubmit={handleSubmit}>
      <InputField
        // Pass ref to input element
        inputRef={inputRef}
        disableUnderline
        size="small"
        placeholder="Enter a Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ButtonSubmit type="submit">Go</ButtonSubmit>
    </FormField>
  );
};

const FormField = styled("form")(({ theme }) => ({
  display: "flex",
  width: "90%",
  position: "relative",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
}));

const InputField = styled(Input)({
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

const ButtonSubmit = styled(Button)(({ theme }) => ({
  position: "absolute",
  width: "50px",
  minWidth: "50px",
  height: "50px",
  margin: "12px",
  fontFamily: "Arial",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50px",
  right: "0px",
  fontSize: "15px",
  color: "white",
  transition: "0.2s all",
  boxShadow: "0 0 10px black",
  ":hover": {
    backgroundColor: theme.palette.primary.light,
  },
  ":active": {
    transform: "scale(0.8)",
    boxShadow: "0 0 5px black",
  },
}));

export default InputFields;
