import { useEffect } from "react";
import useInputValidation from "../hooks/useInputValidation";
import { TextInput } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { StyledInput } from "../assets/styles/StyledInput";
import { TextSpan } from "../assets/styles/StyledSpan";

function FormInput({ type, name, placeholder, minLength, maxLength, getInputValue }) {
  const { inputValue, inputState, errorMessage, onChange, clearInput } = useInputValidation(getInputValue);

  useEffect(() => {
    clearInput();
  }, []);

  return (
    <FlexWrapper
      direction="column"
    >
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        state={inputState}
        onChange={onChange}
        value={inputValue[name]}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <TextSpan
        padding="2px 0"
        minHeight="20px"
      >
        <TextInput error >
          {errorMessage}
        </TextInput>
      </TextSpan>
    </FlexWrapper>
  );
}

export default FormInput;