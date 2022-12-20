import { useState } from "react";
import { TextInput } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { StyledInput } from "../assets/styles/StyledInput";
import { TextSpan } from "../assets/styles/StyledSpan";

function FormInput({ type, name, placeholder, minLength, maxLength }) {
  const [validationState, setValidationState] = useState({ isValid: '', message: '' });

  function checkValidity(evt) {
    if (evt.target.validity.valid) {
      setValidationState(
        {
          isValid: true,
          message: '',
        }
      )
    } else {
      setValidationState(
        {
          isValid: false,
          message: evt.target.validationMessage,
        }
      )
    }
  }

  return (
    <FlexWrapper
      direction="column"
    >
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={checkValidity}
        minLength={minLength}
        maxLength={maxLength}
      />
      <TextSpan
        padding="2px 0"
        minHeight="20px"
      >
        <TextInput error >
          {validationState.message}
        </TextInput>
      </TextSpan>
    </FlexWrapper>
  );
}

export default FormInput;