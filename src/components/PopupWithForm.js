import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFormValidation from "../hooks/useFormValidation";
import { TextRegularBold, TextSmall, TextExtraSmall } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import FormInput from "./FormInput";
import PopupContactsTypeSelect from "./PopupContactsTypeSelect";
import RoleSelectPopup from "./RoleSelectPopup";
import CourseSelectPopup from "./CourseSelectPopup";
import { ButtonPrimary, ButtonClosePopup, ButtonSecondary } from "../assets/styles/Button";
import { InputCheckbox, LabelCheckbox } from "../assets/styles/Checkbox";
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
      <FlexWrapper
        area="title"
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
      </FlexWrapper>
      <FlexWrapper
        direction="column"
        area="inputs"
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
        {location.pathname === "/" &&
          <FlexWrapper
            margin="0 0 20px"
            direction="column"
            gap="20px"
            gapMobile="20px"
          >
            <RoleSelectPopup
              getInputValue={getInputValue}
            />
            <CourseSelectPopup
              getInputValue={getInputValue}
            />
          </FlexWrapper>
        }
        <FormInput
          type="url"
          name="url"
          placeholder="Ссылка на резюме"
          getInputValue={getInputValue}
        />
        <FlexWrapper
          direction="row"
          gap="10px"
          hideOnMobile
        >
          <InputCheckbox
            name="contact-checkbox"
            id="contact-checkbox"
            value="agree"
          />
          <LabelCheckbox
            id="contact-checkbox"
          >
            Даю согласие на обработку персональных данных
          </LabelCheckbox>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper
        margin="0 auto"
        area="button"
        hideOnMobile
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
      <FlexWrapper
        margin="0 auto"
        area="button"
        hideOnDesktop
      >
        <ButtonSecondary
          type="submit"
          disabled={!isValid}
          widthMobile="285px"
        >
          <TextExtraSmall white>
            Отправить
          </TextExtraSmall>
        </ButtonSecondary>
      </FlexWrapper>
      <FlexWrapper
        hideOnMobile
      >
        <ButtonClosePopup
          type="reset"
          onClick={handleClose}
          top="30px"
          right="40px"
        />
      </FlexWrapper>
      <FlexWrapper
        hideOnDesktop
      >
        <ButtonClosePopup
          type="reset"
          onClick={handleClose}
          top="15px"
          right="15px"
        />
      </FlexWrapper>
    </StyledForm>
  );
}

export default PopupWithForm;
