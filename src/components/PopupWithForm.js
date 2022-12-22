import { useLocation } from "react-router-dom";
import useFormValidation from "../hooks/useFormValidation";
import { TextRegularBold, TextSmall } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import FormInput from "./FormInput";
import PopupContactsTypeSelect from "./PopupContactsTypeSelect";
import RoleSelectPopup from "./RoleSelectPopup";
import CourseSelectPopup from "./CourseSelectPopup";
import { ButtonPrimary, ButtonClosePopup } from "../assets/styles/Button";
import { InputCheckbox } from "../assets/styles/Checkbox";
import { LabelRadio } from "../assets/styles/Radio";
import { useEffect } from "react";

function PopupWithForm({ handleClose }) {
  const { inputsValue, isValid, getInputValue, onChange, clearValidation } = useFormValidation();
  const location = useLocation();

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log(inputsValue);

    handleClose();
  }

  useEffect(() => {
    clearValidation();
  }, []);

  return (
    <FlexWrapper
      as="form"
      direction="column"
      padding="40px 90px"
      color="white"
      radius="60px"
      maxWidth="600px"
      gap="25px"
      position="relative"
      onChange={onChange}
      onSubmit={handleSubmit}
    >
      <TextRegularBold
        align="center"
      >
        Расскажите нам о себе и мы сохраним ваши данные
      </TextRegularBold>
      <FlexWrapper
        direction="column"
      >
        <FormInput
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          getInputValue={getInputValue}
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          getInputValue={getInputValue}
        />
        <PopupContactsTypeSelect
          getInputValue={getInputValue}
        />
        {location.pathname === "/vacancy" &&
          <>
            <FormInput
              type="url"
              name="url"
              placeholder="Ссылка на резюме"
              getInputValue={getInputValue}
            />
            <FlexWrapper
              direction="row"
              gap="10px"
              maxWidth="400px"
            >
              <InputCheckbox
                name="contact-checkbox"
                id="contact-checkbox"
                value="agree"
                required
              />
              <LabelRadio
                id="contact-checkbox"
              >
                Даю согласие на обработку персональных данных
              </LabelRadio>
            </FlexWrapper>
          </>
        }
      </FlexWrapper>
      {location.pathname === "/" &&
        <>
          <RoleSelectPopup
            getInputValue={getInputValue}
          />
          <CourseSelectPopup
            getInputValue={getInputValue}
          />
          <FlexWrapper
            direction="column"
          >
            <FormInput
              type="url"
              name="url"
              placeholder="Ссылка на резюме"
              getInputValue={getInputValue}
            />
            <FlexWrapper
              direction="row"
              gap="10px"
              maxWidth="400px"
            >
              <InputCheckbox
                name="contact-checkbox"
                id="contact-checkbox"
                value="agree"
                required
              />
              <LabelRadio
                id="contact-checkbox"
              >
                Даю согласие на обработку персональных данных
              </LabelRadio>
            </FlexWrapper>
          </FlexWrapper>
        </>
      }
      <FlexWrapper
        margin="0 auto"
      >
        <ButtonPrimary
          type="submit"
          disabled={!isValid}
        >
          <TextSmall white>
            Отправить
          </TextSmall>
        </ButtonPrimary>
      </FlexWrapper>
      <ButtonClosePopup
        type="reset"
        onClick={handleClose}
        top="30px"
        right="40px"
      />
    </FlexWrapper>
  );
}

export default PopupWithForm;