import { useCallback, useState } from "react";

function useInputValidation(sendInputValue) {
  const [inputValue, setInputValue] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [inputState, setInputState] = useState('neytral');

  function toggleInputState(isSuccess) {
    setInputState(() => isSuccess ? 'success' : 'error');
  }

  function checkValidity(evt) {
    if (evt.target.validity.valid) {
      setErrorMessage('');
      toggleInputState(true);
    } else {
      setErrorMessage(evt.target.validationMessage);
      toggleInputState(false);
    }
  }

  function onChange(evt) {
    const { name, value } = evt.target;

    setInputValue(() => ({
      [name]: value
    }));

    if(sendInputValue) {
      sendInputValue(name, value);
    }

    checkValidity(evt);
  }

  const clearInput = useCallback(( newValue = {}, newErrors = '', newState = 'neytral' ) => {
    setInputValue(newValue);
    setErrorMessage(newErrors);
    setInputState(newState);
  }, [setInputValue, setErrorMessage, setInputState]);

  return { inputValue, inputState, errorMessage, onChange, clearInput }
}

export default useInputValidation;