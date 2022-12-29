import { useState, useEffect } from "react";
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
import { StyledForm } from "../assets/styles/StyledForm";

function PopupWithForm({ handleClose }) {
  const { inputsValue, isValid, getInputValue, onChange, clearValidation } = useFormValidation();
  const [currentVacancy, setCurrentVacancy] = useState({});
  const location = useLocation();

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log(inputsValue);

    handleClose();
  }

  useEffect(() => {
    if (location.pathname === "/vacancy") {
      const vacancy = JSON.parse(localStorage.getItem('vacancy'));
      setCurrentVacancy(vacancy);

      getInputValue("vacancy", vacancy.name);
    }

    return (() => {
      clearValidation();
    })
  }, []);

  return (
    <StyledForm
      onChange={onChange}
      onSubmit={handleSubmit}
    >
      <TextRegularBold
        align="center"
      >
        {location.pathname === "/" && "Расскажите нам о себе и мы сохраним ваши данные"}
        {location.pathname === "/vacancy" &&
          (currentVacancy.role === "mentor" ? `Хочу стать наставником на курсе ${currentVacancy.name}`
          : `Хочу стать ревьюером на курсе ${currentVacancy.name}`)
        }
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
    </StyledForm>
  );
}

export default PopupWithForm;