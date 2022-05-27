import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import { InputStyled } from "./input";

export interface InputFieldsProps {
  defaultValue?: string;
  onSubmit: (value: string) => void;
}

const InputField: React.FC<InputFieldsProps> = ({
  defaultValue = "",
  onSubmit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState<string>(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(inputValue);
    // Clear input value
    setInputValue("");
    // Blur input after submit
    inputRef.current?.blur();
  };

  return (
    <FormField onSubmit={handleSubmit} data-testid="input-field">
      <InputStyled
        // Pass ref to input element
        inputRef={inputRef}
        disableUnderline
        size="small"
        placeholder="Enter a Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ButtonSubmit type="submit" data-testid="submit-input-field">
        Go
      </ButtonSubmit>
    </FormField>
  );
};

const FormField = styled("form")(({ theme }) => ({
  display: "flex",
  width: "95%",
  position: "relative",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
}));

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

export default InputField;
