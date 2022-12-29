import { useEffect } from "react";
import useInputValidation from "../hooks/useInputValidation";
import { TextInput } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { StyledInput } from "../assets/styles/StyledInput";
import { TextSpan } from "../assets/styles/StyledSpan";
import { StyledInputIcon } from "../assets/styles/StyledInputIcon";
import imageNeytral from "../assets/images/input_image_neytral.svg";
import imageSuccess from "../assets/images/input_image_success.svg";
import imageError from "../assets/images/input_image_error.svg";

function FormInput({ type, name, placeholder, minLength, maxLength, getInputValue }) {
  const { inputValue, inputState, errorMessage, onChange, clearInput } = useInputValidation(getInputValue);

  useEffect(() => {
    clearInput();
  }, []);

  return (
    <FlexWrapper
      direction="column"
    >
      <FlexWrapper
        position="relative"
        width="384px"
        widthMobile="285px"
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
        <StyledInputIcon
          image={inputState === 'success' ? imageSuccess :
            inputState === 'error' ? imageError : imageNeytral
          }
        />
      </FlexWrapper>
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