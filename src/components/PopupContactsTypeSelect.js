import { useState } from "react";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { InputRadio, LabelRadio } from "../assets/styles/Radio";
import FormInput from "./FormInput";

function PopupContactsTypeSelect({ getInputValue }) {
  const [selectedInput, setSelectedInput] = useState("telephone");

  function handleChange(evt) {
    setSelectedInput(evt.target.value);
  }

  return (
    <FlexWrapper
      as="fieldset"
      direction="column"
      gap="6px"
    >
      <FlexWrapper
        direction="row"
        gap="20px"
      >
        <FlexWrapper
          direction="row"
          gap="5px"
        >
          <InputRadio
            name="contact"
            id="contact-telephone"
            value="telephone"
            defaultChecked
            onChange={handleChange}
          />
          <LabelRadio
            id="contact-telephone"
          >
            Телефон
          </LabelRadio>
        </FlexWrapper>
        <FlexWrapper
          direction="row"
          gap="5px"
        >
          <InputRadio
            name="contact"
            id="contact-telegram"
            value="telegram"
            onChange={handleChange}
          />
          <LabelRadio
            id="contact-telegram"
          >
            Телеграм
          </LabelRadio>
        </FlexWrapper>
      </FlexWrapper>
      {selectedInput === "telephone" &&
        <FormInput
          type="tel"
          name="phone"
          placeholder="+7"
          required
          getInputValue={getInputValue}
        />
      }
      {selectedInput === "telegram" &&
        <FormInput
          type="text"
          name="telegram"
          placeholder="@"
          minLength="5"
          maxLength="32"
          required
          getInputValue={getInputValue}
        />
      }
    </FlexWrapper>
  );
}

export default PopupContactsTypeSelect;