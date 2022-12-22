import { useCallback, useState } from "react";

function useFormValidation() {
  const [inputsValue, setInputsValue] = useState({});
  const [isValid, setValidationStatus] = useState(false);

  function getInputValue(name, value) {
    setInputsValue(current => ({
      ...current,
      [name]: value,
    }));
  }

  function onChange(evt) {
    setValidationStatus(evt.currentTarget.checkValidity());
  }

  const clearValidation = useCallback(( newValue = {}, newValidationStatus = false ) => {
    setInputsValue(newValue);
    setValidationStatus(newValidationStatus);
  }, [setInputsValue, setValidationStatus]);

  return { inputsValue, isValid, getInputValue, onChange, clearValidation }
}

export default useFormValidation;